import webview
import os
import sys
import subprocess
import socket
import urllib.request
import ssl
import json
import platform
import time


def get_resource_path(relative_path):
    """Get absolute path to resource, works for dev and for PyInstaller bundle."""
    if getattr(sys, 'frozen', False):
        # Running as compiled executable
        base_path = sys._MEIPASS
    else:
        # Running as script
        base_path = os.path.dirname(os.path.abspath(__file__))
    
    return os.path.join(base_path, relative_path)


class CheckerAPI:
    """Python backend exposed to JavaScript via pywebview."""

    def __init__(self):
        # Create Checker folder on Desktop
        desktop = os.path.join(os.path.expanduser('~'), 'Desktop')
        self.checker_folder = os.path.join(desktop, 'Checker')
        os.makedirs(self.checker_folder, exist_ok=True)
        print(f"Checker folder: {self.checker_folder}")

    # ── System Info ────────────────────────────────────────────────────────────

    def get_system_info(self):
        """Return system info as JSON."""
        try:
            win_ver = platform.version()
        except Exception:
            win_ver = 'Unknown'
        
        return json.dumps({
            'username': os.environ.get('USERNAME', os.environ.get('USER', 'Unknown')),
            'hostname': socket.gethostname(),
            'arch': 'x64' if sys.maxsize > 2 ** 32 else 'x86',
            'os_version': win_ver,
            'checker_folder': self.checker_folder,
        })

    # ── File Download - FAST DOWNLOADS ─────────────────────────────────────────

    def download_file(self, url, filename):
        """Download a file to the Checker folder - FAST with no delays."""
        dest = os.path.join(self.checker_folder, filename)
        
        # Check if file already exists
        if os.path.exists(dest):
            file_size = os.path.getsize(dest)
            print(f"File already exists: {filename} ({file_size} bytes)")
            return json.dumps({'ok': True, 'path': dest, 'bytes': file_size, 'cached': True})
        
        try:
            print(f"Starting download: {filename} from {url}")
            
            # Create SSL context with more permissive settings
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE

            # Prepare request with proper headers
            req = urllib.request.Request(url, headers={
                'User-Agent': (
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                    'AppleWebKit/537.36 (KHTML, like Gecko) '
                    'Chrome/131.0.0.0 Safari/537.36'
                ),
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate',
                'Connection': 'keep-alive',
            })

            # Download with progress (1MB chunks for speed)
            chunk_size = 1024 * 1024  # 1MB chunks
            
            with urllib.request.urlopen(req, context=ctx, timeout=60) as resp:
                total = int(resp.headers.get('Content-Length', 0))
                downloaded = 0
                print(f"Download size: {total} bytes" if total else "Download size: unknown")

                with open(dest, 'wb') as f:
                    while True:
                        chunk = resp.read(chunk_size)
                        if not chunk:
                            break
                        f.write(chunk)
                        downloaded += len(chunk)
                        
                        # Print progress every 10MB
                        if downloaded % (10 * 1024 * 1024) < chunk_size:
                            if total > 0:
                                percent = (downloaded / total) * 100
                                print(f"Download progress: {percent:.1f}% ({downloaded}/{total})")
                            else:
                                print(f"Downloaded: {downloaded} bytes")

            print(f"Download complete: {filename} ({downloaded} bytes) to {dest}")
            return json.dumps({'ok': True, 'path': dest, 'bytes': downloaded})

        except urllib.error.URLError as e:
            error_msg = f"URL Error: {str(e.reason) if hasattr(e, 'reason') else str(e)}"
            print(f"Download error: {error_msg}")
            # Clean up partial download if it exists
            if os.path.exists(dest):
                try:
                    os.remove(dest)
                except:
                    pass
            return json.dumps({'ok': False, 'error': error_msg})
            
        except Exception as e:
            error_msg = str(e)
            print(f"Download error: {error_msg}")
            # Clean up partial download if it exists
            if os.path.exists(dest):
                try:
                    os.remove(dest)
                except:
                    pass
            return json.dumps({'ok': False, 'error': error_msg})

    # ── Registry Scan ─────────────────────────────────────────────────────────

    def usb_check(self, key):
        """Query a single registry key for USB evidence. Returns JSON."""
        try:
            result = subprocess.run(
                ['reg', 'query', key],
                capture_output=True, text=True, timeout=10,
                shell=True
            )
            exists = result.returncode == 0 and bool(result.stdout.strip())
            subkeys = []
            if exists:
                lines = result.stdout.splitlines()
                for line in lines:
                    line = line.strip()
                    if line.startswith('HKEY'):
                        subkeys.append(line)
            return json.dumps({
                'ok': True,
                'exists': exists,
                'key': key,
                'subkeys': subkeys[:20],
                'count': len(subkeys),
            })
        except subprocess.TimeoutExpired:
            return json.dumps({'ok': False, 'exists': False, 'key': key, 'error': 'Timeout'})
        except Exception as e:
            return json.dumps({'ok': False, 'exists': False, 'key': key, 'error': str(e)})

    # ── PowerShell ────────────────────────────────────────────────────────────

    def run_powershell(self, script):
        """Execute a PowerShell script/command. Returns JSON with stdout/stderr."""
        try:
            print(f"Running PowerShell script...")
            result = subprocess.run(
                ['powershell', '-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', script],
                capture_output=True, text=True, timeout=120,
                encoding='utf-8', errors='replace',
                shell=True
            )
            print(f"PowerShell exit code: {result.returncode}")
            return json.dumps({
                'ok': result.returncode == 0,
                'stdout': result.stdout,
                'stderr': result.stderr,
                'exitCode': result.returncode,
            })
        except subprocess.TimeoutExpired:
            return json.dumps({'ok': False, 'error': 'Script timed out after 120s', 'stdout': '', 'stderr': '', 'exitCode': -1})
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e), 'stdout': '', 'stderr': '', 'exitCode': -1})

    # ── Utilities ─────────────────────────────────────────────────────────────

    def open_folder(self):
        """Open the Checker folder in Windows Explorer."""
        try:
            subprocess.Popen(['explorer', self.checker_folder])
            return json.dumps({'ok': True})
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e)})

    def open_url(self, url):
        """Open a URL in the default browser."""
        import webbrowser
        webbrowser.open(url)
        return json.dumps({'ok': True})

    def get_checker_files(self):
        """List files already in the Checker folder."""
        try:
            files = []
            for f in os.listdir(self.checker_folder):
                full = os.path.join(self.checker_folder, f)
                if os.path.isfile(full):
                    files.append({
                        'name': f,
                        'size': os.path.getsize(full),
                        'modified': os.path.getmtime(full),
                    })
            return json.dumps({'ok': True, 'files': files})
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e), 'files': []})

    def check_download_status(self, filename):
        """Check if a file has been downloaded already."""
        dest = os.path.join(self.checker_folder, filename)
        if os.path.exists(dest):
            return json.dumps({'downloaded': True, 'path': dest, 'size': os.path.getsize(dest)})
        return json.dumps({'downloaded': False})

    def delete_file(self, filename):
        """Delete a downloaded file."""
        dest = os.path.join(self.checker_folder, filename)
        try:
            if os.path.exists(dest):
                os.remove(dest)
                return json.dumps({'ok': True})
            return json.dumps({'ok': False, 'error': 'File not found'})
        except Exception as e:
            return json.dumps({'ok': False, 'error': str(e)})


# ── Entry Point ────────────────────────────────────────────────────────────────

def main():
    api = CheckerAPI()
    
    # Get the correct path to index.html
    index_path = get_resource_path(os.path.join('web', 'index.html'))
    
    print(f"Looking for index.html at: {index_path}")
    
    if not os.path.exists(index_path):
        print(f"ERROR: Could not find index.html at {index_path}")
        print(f"Current working directory: {os.getcwd()}")
        print(f"sys._MEIPASS: {getattr(sys, '_MEIPASS', 'Not set')}")
        
        # Try fallback locations
        fallback_paths = [
            os.path.join(os.path.dirname(os.path.abspath(__file__)), 'web', 'index.html'),
            os.path.join(os.path.dirname(os.path.abspath(__file__)), 'index.html'),
            'web/index.html',
            'index.html'
        ]
        
        for fallback in fallback_paths:
            if os.path.exists(fallback):
                index_path = fallback
                print(f"Found fallback at: {index_path}")
                break
        else:
            input("Press Enter to exit...")
            return

    # Create window
    window = webview.create_window(
        title='OnyForensic',
        url=index_path,
        js_api=api,
        width=1400,
        height=900,
        min_size=(1024, 700),
        resizable=True,
        background_color='#0a0b0f',
        text_select=False,
        frameless=False,
    )

    print("Starting OnyForensic...")
    webview.start(debug=False, http_server=True)


if __name__ == '__main__':
    main()