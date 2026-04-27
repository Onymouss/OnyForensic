'use strict';

// ─── Tool Data ───────────────────────────────────────────────────────────────

const TOOLS = {
  nirsoft: {
    label: 'NirSoft Tools',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.15)',
    tools: [
      { id:'n1', name:'WinPrefetchView', url:'https://www.nirsoft.net/utils/winprefetchview.zip', filename:'WinPrefetchView.zip' },
      { id:'n2', name:'WinDefThreatsView', url:'https://www.nirsoft.net/utils/windefthreatsview.zip', filename:'WinDefThreatsView.zip' },
      { id:'n3', name:'USBDeview', url:'https://www.nirsoft.net/utils/usbdeview.zip', filename:'USBDeview.zip' },
      { id:'n4', name:'LastActivityView', url:'https://www.nirsoft.net/utils/lastactivityview.zip', filename:'LastActivityView.zip' },
      { id:'n5', name:'AlternateStreamView', url:'https://www.nirsoft.net/utils/alternatestreamview.zip', filename:'AlternateStreamView.zip' },
      { id:'n6', name:'TaskSchedulerView', url:'https://www.nirsoft.net/utils/taskschedulerview.zip', filename:'TaskSchedulerView.zip' },
      { id:'n7', name:'BrowsingHistoryView', url:'https://www.nirsoft.net/utils/browsinghistoryview.zip', filename:'BrowsingHistoryView.zip' },
      { id:'n8', name:'WinDefLogView', url:'https://www.nirsoft.net/utils/windeflogview.zip', filename:'WinDefLogView.zip' },
      { id:'n9', name:'whatinstartup', url:'https://www.nirsoft.net/utils/whatinstartup-x64.zip', filename:'whatinstartup.zip' },
    ]
  },
  espouken: {
    label: 'Espouken Tools',
    color: '#e63950',
    bgColor: 'rgba(230,57,80,0.15)',
    tools: [
      { id:'e1', name:'PcaSvcExecuted', url:'https://github.com/spokwn/pcasvc-executed/releases/download/v0.8.7/PcaSvcExecuted.exe', filename:'PcaSvcExecuted.exe' },
      { id:'e2', name:'BAMParser', url:'https://github.com/spokwn/BAM-parser/releases/download/v1.2.9/BAMParser.exe', filename:'BAMParser.exe' },
      { id:'e3', name:'KernelLiveDumpTool', url:'https://github.com/spokwn/KernelLiveDumpTool/releases/download/v1.1/KernelLiveDumpTool.exe', filename:'KernelLiveDumpTool.exe' },
      { id:'e4', name:'BamDeletedKeys', url:'https://github.com/spokwn/BamDeletedKeys/releases/download/v1.0/BamDeletedKeys.exe', filename:'BamDeletedKeys.exe' },
      { id:'e5', name:'ReplaceParser', url:'https://github.com/spokwn/Replaceparser/releases/download/v1.1-recode/ReplaceParser.exe', filename:'ReplaceParser.exe' },
      { id:'e6', name:'JournalTrace', url:'https://github.com/spokwn/JournalTrace/releases/download/1.2/JournalTrace.exe', filename:'JournalTrace.exe' },
      { id:'e7', name:'ProcessParser', url:'https://github.com/spokwn/process-parser/releases/download/v0.5.5/ProcessParser.exe', filename:'ProcessParser.exe' },
      { id:'e8', name:'PrefetchParser', url:'https://github.com/spokwn/prefetch-parser/releases/download/v1.5.5/PrefetchParser.exe', filename:'PrefetchParser.exe' },
      { id:'e9', name:'PathsParser', url:'https://github.com/spokwn/PathsParser/releases/download/v1.2/PathsParser.exe', filename:'PathsParser.exe' },
      { id:'e10', name:'ActivitiesCacheParser', url:'https://github.com/spokwn/ActivitiesCache-execution/releases/download/v0.6.5/ActivitiesCacheParser.exe', filename:'ActivitiesCacheParser.exe' },

    ]
  },
  zimmerman: {
    label: 'Eric Zimmerman',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.15)',
    tools: [
      { id:'z1', name:'AmCacheParser', url:'https://download.ericzimmermanstools.com/net9/AmcacheParser.zip', filename:'AmCacheParser.zip' },
      { id:'z2', name:'Timeline Explorer', url:'https://download.ericzimmermanstools.com/net9/TimelineExplorer.zip', filename:'TimelineExplorer.zip' },
      { id:'z3', name:'Bstrings', url:'https://download.ericzimmermanstools.com/net9/bstrings.zip', filename:'Bstrings.zip' },
      { id:'z4', name:'SrumECmd', url:'https://download.ericzimmermanstools.com/net9/SrumECmd.zip', filename:'SrumECmd.zip' },
      { id:'z5', name:'AppCompatCacheParser', url:'https://download.ericzimmermanstools.com/net9/AppCompatCacheParser.zip', filename:'AppCompatCacheParser.zip' },
      { id:'z6', name:'Registry Explorer', url:'https://download.ericzimmermanstools.com/net9/RegistryExplorer.zip', filename:'RegistryExplorer.zip' },
      { id:'z7', name:'MfteCmd', url:'https://download.ericzimmermanstools.com/net9/MFTECmd.zip', filename:'MfteCmd.zip' },
      { id:'z8', name:'EvtxECmd', url:'https://download.ericzimmermanstools.com/net9/EvtxECmd.zip', filename:'EvtxECmd.zip' },
      { id:'z9', name:'PECmd', url:'https://download.ericzimmermanstools.com/net9/PECmd.zip', filename:'PECmd.zip' },
      { id:'z10', name:'ShellBagsExplorer', url:'https://download.ericzimmermanstools.com/net9/ShellBagsExplorer.zip', filename:'ShellBagsExplorer.zip' },

    ]
  },
  echo: {
    label: 'Echo Tools',
    color: '#22c55e',
    bgColor: 'rgba(34,197,94,0.15)',
    tools: [
      { id:'ec1', name:'Echo Strings', url:'https://dl.echo.ac/tool/strings', filename:'echo-strings.exe' },
      { id:'ec2', name:'Echo Journal', url:'https://dl.echo.ac/tool/journal', filename:'echo-journal.exe' },
      { id:'ec3', name:'Echo UsbViewer', url:'https://dl.echo.ac/tool/usb', filename:'echo-usb.exe' },
      { id:'ec4', name:'Echo BAM Log Viewer ', url:'https://dl.echo.ac/tool/bam', filename:'echo-bam.exe' },
      { id:'ec5', name:'Echo UserAssist Viewer', url:'https://dl.echo.ac/tool/userassist', filename:'echo-userassist.exe' },
    ]
  },
  standalone: {
    label: 'Standalone Tools',
    color: '#a855f7',
    bgColor: 'rgba(168,85,247,0.15)',
    tools: [
      { id:'s1', name:'Magnet Process Capture  ', url:'https://magnets', filename:'MagnetProcessCapture.exe' },
      { id:'s2', name:'Hayabusa', url:'https://github.com/Yamato-Security/hayabusa/releases/download/v3.8.1/hayabusa-3.8.1-win-x64.zip', filename:'Hayabusa.zip' },
      { id:'s3', name:'OsForensics', url:'https://www.osforensics.com/downloads/OSForensics.exe', filename:'OsForensics.exe' },
      { id:'s4', name:'System Informer', url:'https://deac-riga.dl.sourceforge.net/project/systeminformer/systeminformer-3.2.25011-release-setup.exe?viasf=1', filename:'SystemInformer.exe' },
      { id:'s6', name:'System Informer Canary', url:'https://release-assets.githubusercontent.com/github-production-release-asset/550621342/2653b08a-c307-4378-9367-1c2cc1f6f340?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-04-27T18%3A36%3A29Z&rscd=attachment%3B+filename%3Dsysteminformer-build-canary-setup.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-04-27T17%3A36%3A11Z&ske=2026-04-27T18%3A36%3A29Z&sks=b&skv=2018-11-09&sig=xC12t7rx4bSAN99Orr9D3yoNVf2r5akyKdQAiJbdrEA%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3NzMxNDI3OSwibmJmIjoxNzc3MzEyNDc5LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.gNtH4qA1lCPzmpRcQuOxCRomdGCG0ooJsO6DE2Z3HUI&response-content-disposition=attachment%3B%20filename%3Dsysteminformer-build-canary-setup.exe&response-content-type=application%2Foctet-stream', filename:'SystemInformerCanary.exe' },
      { id:'s7', name:'Technical Utilities', url:'https://github.com/txvch/Screenshare-Collector/releases/download/tech/Technical.Utilities.exe', filename:'TechnicalUtilities.exe' },
      { id:'s8', name:'SeeShells v2', url:'https://github.com/RickLeinecker/SeeShellsv2/releases/download/v2.0-production/SeeShellsV2.zip', filename:'SeeShellsV2.zip' },
      { id:'s9', name:'Everything', url:'https://www.voidtools.com/Everything-1.4.1.1026.x64.zip', filename:'Everything.zip' },
      { id:'s10', name:'Chainsaw', url:'https://github.com/WithSecureLabs/chainsaw/releases/download/v2.15.0/chainsaw_x86_64-pc-windows-msvc.zip', filename:'chainsaw_x86_64-pc-windows-msvc.zip' },
      { id:'s11', name:'Velociraptor', url:'https://github.com/Velocidex/velociraptor/releases/download/v0.76/velociraptor-v0.76.3-windows-386.exe', filename:'velociraptor.exe' },
    ]
  },
  redlotus: {
    label: 'RedLotus Tools',
    color: '#ef4444',
    bgColor: 'rgba(239,68,68,0.15)',
    tools: [
      { id:'r1', name:'Alt Checker', url:'https://github.com/ItzIceHere/RedLotusAltChecker/releases/download/RL/RedLotusAltChecker.exe', filename:'RedLotusAltChecker.exe' },
      { id:'r2', name:'Mod Analyser', url:'https://github.com/ItzIceHere/RedLotus-Mod-Analyzer/releases/download/RL/RedLotusModAnalyzer.exe', filename:'RedLotusModAnalyzer.exe' },
      { id:'r3', name:'Task Sentinel', url:'https://github.com/ItzIceHere/RedLotus-Task-Sentinel/releases/download/RL/RedLotusTaskSentinel.exe', filename:'RedLotusTaskSentinel.exe' },
      { id:'r4', name:'Hex Viewer', url:'https://github.com/RedLotus-Development/Hex-Viewer/releases/download/v1.0/HexViewer.exe', filename:'HexViewer.exe' },
    ]
  },
  filerecovery: {
    label: 'File Recovery Tools',
    color: '#06b6d4',
    bgColor: 'rgba(6,182,212,0.15)',
    tools: [
      { id:'fr1', name:'Disk Drill', url:'https://win.cleverfiles.com/disk-drill-win.exe', filename:'DiskDrill.exe' },
      { id:'fr2', name:'Recuva', url:'https://download.ccleaner.com/rcsetup154.exe', filename:'rcsetup154.exe' },
      { id:'fr4', name:'TestDisk', url:'https://www.cgsecurity.org/Download_and_donate.php/testdisk-7.3-WIP.win.zip', filename:'TestDisk.zip' },
    ]
  },
  memoryforensics: {
    label: 'Memory Forensics',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.15)',
    tools: [
      { id:'mf1', name:'Volatility', url:'https://downloads.volatilityfoundation.org/releases/2.6/volatility_2.6_win64_standalone.zip', filename:'Volatility.zip' },
      { id:'mf2', name:'FTK Imager', url:'https://d1kpmuwb7gvu1i.cloudfront.net/Imgr/4.7.3.81%20Release/Exterro_FTK_Imager_%28x64%29-4.7.3.81.exe', filename:'Exterro_FTK_Imager_(x64)-4.7.3.81.exe' },      
      { id:'mf3', name:'RedLine', url:'https://s3.amazonaws.com/fireeye.market/downloads/apps/211364//cbd911cf/sdl-redline.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAUVOA4GNS26PLR4ZR%2F20260427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260427T182154Z&X-Amz-Expires=60&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJHMEUCIQChwF7gO8T2%2FikWKoQw9SSKK0GLCFTW9lU5ADmYUO%2BaiAIgBYueJWN5qTtdNXh2Vj3%2FeZCHd3dA2lml9AeW4%2BWTvUwq5gMIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzMjA5MTY0MzU4MTMiDFoaDhVdxSXd9bzRWiq6Awcd9OFO79xL6XhbEy6XrKHxV%2FKVOe0psklVmTTNbeOPrDy8uL0Zc365OYD%2BZJ68HBzSOzcDxYa8ghrMD%2BsdrfxyhKWwFy2JnHVloEJXB2yO0i9aivr2%2B3umFQRdWAMArP2WenLQ8Y%2ByLUIjrSKn2y5HvbuwifonPpgm2f9oUCgyI%2Ba2fRZai1l0%2F2rNiyLQ6J09LsyyT6%2FH6qEJNLI2aBT%2BxCydgMVdJpUl5z7MEcvWtqpCKOYj9%2BWcjeFtgPQPbcV6KbzH2ISXxYZ3acy4%2BE5u6tOvxGJOCAQsMF2bgCtffbTpLaUyYLmE2H6a1Do%2BvF2YwIg1o1aHQ1MgBAJwZsad58eUqVBv1qd1QfoGs5pHoeBYoDLYvI5nWXOKJ2DsZsMhjoILkAfyANvhK%2BZ3IrQZvkVFgjjrBzsKIdgc2q0c14ZolLgTugM5FFIG2ETI8lZbwRKH36OJjm%2FxSLvC4ri9od6RyLptHBkYqlQpjU93WD8bUNjSBQIPRUTDhhRkQbz%2BkgqaW57mxzoYN5fswSpD18zgqsGliOLuZ7RBko8Hy1WL4VyO9tQeVyMsIYEmnYs7fM4phY40r8Aw7dG%2BzwY6oQHfXpkwI3tuXjWOjmaJwzjiR3guE4NIFYGEPl%2FsDO9iwaPoOOYEfufhfVxNZMtefN5xC2NBy%2BrysV8HiAN4pUVWhN%2BLJKXXcxsAzUElzmRGI7qj7aNjPijKY%2B6WVC3Uyve7EWZbsTEiA1TZMdyHahkwU96S%2F8vVVEApCUJUBgKfWP5hTxca%2Ftbws9afVxugexZVuSbu1RhCOg2%2BqfApd2Cllg%3D%3D&X-Amz-Signature=c7759f2a09b5bd67656168c7b4a34783e84c19542ba889af94c900074fb6257f&X-Amz-SignedHeaders=host', filename:'redline.zip' },
      { id:'mf4', name:'DumpIT', url:'https://raw.githubusercontent.com/thimbleweed/All-In-USB/refs/heads/master/utilities/DumpIt/DumpIt.exe', filename:'DumpIt.exe' },      

    ]
  },
  sysinternals: {
    label: 'Sysinternals Tools',
    color: '#f97316',
    bgColor: 'rgba(249,115,22,0.15)',
    tools: [
      { id:'sy1', name:'Autoruns', url:'https://live.sysinternals.com/Autoruns64.exe', filename:'Autoruns.exe' },
      { id:'sy2', name:'Process Explorer', url:'https://live.sysinternals.com/procexp64.exe', filename:'ProcessExplorer.exe' },
      { id:'sy3', name:'TCPView', url:'https://live.sysinternals.com/tcpview.exe', filename:'TCPView.exe' },
      { id:'sy4', name:'Sigcheck', url:'https://live.sysinternals.com/sigcheck64.exe', filename:'Sigcheck.exe' },
    ]
  },
  network: {
    label: 'Network Tools',
    color: '#14b8a6',
    bgColor: 'rgba(20,184,166,0.15)',
    tools: [
      { id:'nt1', name:'Wireshark', url:'https://2.na.dl.wireshark.org/win64/Wireshark-4.4.3-x64.exe', filename:'Wireshark.exe' },
      { id:'nt2', name:'Fiddler', url:'https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe', filename:'Fiddler.exe' },
      { id:'nt3', name:'Nmap', url:'https://nmap.org/dist/nmap-7.95-setup.exe', filename:'Nmap.exe' },
    ]
  },
  diskanalysis: {
    label: 'Disk Analysis',
    color: '#ec4899',
    bgColor: 'rgba(236,72,153,0.15)',
    tools: [
      { id:'da1', name:'Autopsy', url:'https://github.com/sleuthkit/autopsy/releases/download/autopsy-4.23.0/autopsy-4.23.0.zip', filename:'autopsy-4.23.0.zip' },
      { id:'da2', name:'KAPE', url:'https://s3.amazonaws.com/cyb-us-prd-kape/kape.zip?utm_campaign=&utm_medium=email&utm_source=Eloqua&elqTrackId=1E4F7CD2BB355451C938F361CF5ACFC6&elq=6e565ca4453c43c2b7c1eb6e81598dce&elqaid=8379&elqat=1&elqCampaignId=&elqak=8AF59FF86627435016F46CD3A1CA3478D72ECA92F007DA5CA2D579E89F0A59F1668E', filename:'KAPE.zip' },
    ]
  },
  persistence: {
    label: 'Persistence Analysis',
    color: '#84cc16',
    bgColor: 'rgba(132,204,22,0.15)',
    tools: [
      { id:'pe1', name:'RegRipper', url:'https://codeload.github.com/keydet89/RegRipper4.0/zip/refs/heads/main', filename:'RegRipper.zip' },
      { id:'pe2', name:'StartupList', url:'https://www.nirsoft.net/utils/strun.zip', filename:'StartupList.zip' },
    ]
  },
  fileanalysis: {
    label: 'File Analysis Tools',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.15)',
    tools: [
      { id:'fa1', name:'Detect It Easy', url:'https://www.majorgeeks.com/index.php?ct=files&action=download&', filename:'DetectItEasy.zip' },
      { id:'fa2', name:'BinText', url:'https://www.majorgeeks.com/index.php?ct=files&action=download&', filename:'BinText.zip' },
      { id:'fa3', name:'Disk Investigator', url:'https://www.theabsolute.net/sware/files/dskinv.exe', filename:'DiskInvestigator.exe' },
      { id:'fa4', name:'HxD Hex Editor', url:'https://mh-nexus.de/downloads/HxDSetup.zip', filename:'HxDSetup.zip' },
      { id:'fa5', name:'PE-bear', url:'https://github.com/hasherezade/pe-bear/releases/download/v0.7.1/PE-bear_0.7.1_qt4_x86_win_vs10.zip', filename:'PE-bear.zip' },
      { id:'fa6', name:'x64dbg', url:'https://github.com/x64dbg/x64dbg/releases/download/2026.04.20/snapshot_2026-04-20_19-04.zip', filename:'snapshot_2026-04-20_19-04.zip' },
      { id:'fa7', name:'Ghidra', url:'https://github.com/NationalSecurityAgency/ghidra/releases/download/Ghidra_12.0.4_build/ghidra_12.0.4_PUBLIC_20260303.zip', filename:'Ghidra.zip' },
    ]
  }
};

const PS_SCRIPTS = [
  {
    id:'ps1',
    name:'Services Check',
    desc:'Enumerate running services and flag suspicious entries',
    script:`Get-Service | Where-Object {$_.Status -eq 'Running'} | Select-Object Name, DisplayName, StartType | Format-Table -AutoSize`
  },
  {
    id:'ps2',
    name:'Red Lotus BAM',
    desc:'Parse BAM (Background Activity Moderator) for execution evidence',
    script:`$bamPath="HKLM:\\SYSTEM\\CurrentControlSet\\Services\\bam\\State\\UserSettings"; if(Test-Path $bamPath){Get-ChildItem $bamPath | ForEach-Object { $sid=$_.PSChildName; Get-ItemProperty -Path $_.PSPath | Select-Object -Property * -ExcludeProperty PS* | ForEach-Object { $_.PSObject.Properties | Where-Object {$_.Value -is [byte[]]} | ForEach-Object { Write-Output "$sid | $($_.Name)" } } }} else { Write-Output "BAM path not found." }`
  },
  {
    id:'ps3',
    name:'Path Signature Check',
    desc:'Verify Authenticode signatures on all running processes',
    script:`Get-Process | Select-Object Id, Name, Path | Where-Object {$_.Path} | ForEach-Object { $sig=Get-AuthenticodeSignature $_.Path -ErrorAction SilentlyContinue; [PSCustomObject]@{PID=$_.Id; Name=$_.Name; Status=$sig.Status; Signer=$sig.SignerCertificate.Subject} } | Format-Table -AutoSize`
  },
  {
    id:'ps4',
    name:'Hard Disk Volume Info',
    desc:'List all disk volumes and their serial numbers',
    script:`Get-Disk | Select-Object Number,FriendlyName,Size,SerialNumber | Format-Table -AutoSize; Get-Volume | Select-Object DriveLetter,FileSystemLabel,FileSystem,Size,SizeRemaining | Format-Table -AutoSize`
  },
  {
    id:'ps5',
    name:'Recent File Activity',
    desc:'Show files accessed or modified in the last 24 hours',
    script:`$since=(Get-Date).AddDays(-1); Get-ChildItem $env:USERPROFILE -Recurse -ErrorAction SilentlyContinue | Where-Object {$_.LastWriteTime -gt $since -and !$_.PSIsContainer} | Sort-Object LastWriteTime -Descending | Select-Object -First 50 FullName, LastWriteTime | Format-Table -AutoSize`
  },
  {
    id:'ps6',
    name:'Network Connections',
    desc:'Show all active TCP connections with process names',
    script:`Get-NetTCPConnection | Where-Object {$_.State -eq "Established"} | Select-Object LocalAddress,LocalPort,RemoteAddress,RemotePort,State,@{n='Process';e={(Get-Process -Id $_.OwningProcess -EA SilentlyContinue).Name}} | Format-Table -AutoSize`
  },
  {
    id:'ps7',
    name:'Red Lotus Scheduler',
    desc:'Parse Windows Task Scheduler for suspicious tasks',
    script:`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; Invoke-Expression (Invoke-RestMethod 'https://raw.githubusercontent.com/ObsessiveBf/Task-Scheduler-Parser/main/script.ps1')`
  },
  {
    id:'ps8',
    name:'Mod Analyzer',
    desc:'Analyze modifications and potential cheats',
    script:`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/HadronCollision/PowershellScripts/refs/heads/main/HabibiModAnalyzer.ps1)`
  },
  {
    id:'ps9',
    name:'SUSPICIOUS TASK PARSER',
    desc:'Parse and identify suspicious scheduled tasks',
    script:`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; Invoke-Expression (Invoke-RestMethod 'https://raw.githubusercontent.com/nolww/project-mohr/refs/heads/main/SuspiciousScheduler.ps1')`
  },
  {
    id:'ps10',
    name:'MANUAL TASKS PARSER',
    desc:'Parse manually created scheduled tasks',
    script:`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass; Invoke-Expression (Invoke-RestMethod 'https://raw.githubusercontent.com/nolww/project-mohr/refs/heads/main/ManualTasks.ps1')`
  },
  {
    id:'ps11',
    name:'Service Checker',
    desc:'Check critical Windows services status',
    script:`$services = @("SysMain", "PcaSvc", "DPS", "EventLog", "Schedule", "Bam", "Dusmsvc", "Appinfo", "SSDPSRV", "CDPSvc", "DcomLaunch", "PlugPlay"); $serviceTable = foreach ($service in $services) { $status = Get-Service -Name $service -ErrorAction SilentlyContinue; [PSCustomObject]@{ 'Service' = $service; 'Full Name' = if ($status) { $status.DisplayName } else { "Not Found" }; 'Status' = if ($status -and $status.Status -eq "Running") { "Running" } else { "Stopped" } } }; $serviceTable | Format-Table -AutoSize`
  }
];

const USB_KEYS = [
  'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR',
  'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USB',
  'HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows Portable Devices\\Devices',
  'HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\DeviceClasses\\{53f56307-b6bf-11d0-94f2-00a0c91efb8b}',
];

// ─── State ───────────────────────────────────────────────────────────────────

const dlState = {};
let activeDownloads = 0;

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderAllToolTabs();
  renderPSTab();
  renderUSBKeys();
  setupNavigation();
  loadExistingDownloads();
});

async function loadExistingDownloads() {
  if (!window.pywebview) return;
  try {
    const raw = await pywebview.api.get_checker_files();
    const res = JSON.parse(raw);
    if (res.ok && res.files) {
      let downloadedCount = 0;
      res.files.forEach(file => {
        for (const cat in TOOLS) {
          const tool = TOOLS[cat].tools.find(t => t.filename === file.name);
          if (tool && dlState[tool.id] !== 'done') {
            dlState[tool.id] = 'done';
            downloadedCount++;
            const statusEl = document.getElementById(`status-${tool.id}`);
            const dlBtn = document.getElementById(`dl-btn-${tool.id}`);
            const runBtn = document.getElementById(`run-btn-${tool.id}`);
            if (statusEl) {
              statusEl.className = 'tool-status status-done';
              statusEl.innerHTML = '<span>✓</span> Downloaded';
            }
            if (dlBtn) {
              dlBtn.disabled = true;
              dlBtn.innerHTML = '✓ Done';
            }
            if (runBtn) runBtn.removeAttribute('disabled');
          }
        }
      });
      document.getElementById('stat-downloaded').textContent = downloadedCount;
    }
  } catch (err) {
    console.error('Failed to load existing downloads:', err);
  }
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });
}

function switchTab(tab) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-item[data-tab="${tab}"]`);
  if (navBtn) navBtn.classList.add('active');

  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  const tabEl = document.getElementById(`tab-${tab}`);
  if (tabEl) {
    tabEl.classList.add('active');
    tabEl.classList.add('fade-in');
    setTimeout(() => tabEl.classList.remove('fade-in'), 300);
  }
}

// ─── Render Tool Tabs ─────────────────────────────────────────────────────────

function renderAllToolTabs() {
  Object.entries(TOOLS).forEach(([cat, data]) => {
    const container = document.querySelector(`.tool-tab[data-category="${cat}"]`);
    if (!container) return;

    container.innerHTML = `
      <div class="tool-tab-header">
        <div class="page-header" style="margin:0">
          <h1>${data.label}</h1>
          <p class="page-sub">${data.tools.length} tools available</p>
        </div>
        <button class="download-all-btn" onclick="downloadAllInCategory('${cat}')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download All
        </button>
      </div>
      <div class="tool-grid" id="grid-${cat}">
        ${data.tools.map(t => renderToolCard(t, data)).join('')}
      </div>
    `;
  });
}

function renderToolCard(tool, catData) {
  const isDownloaded = dlState[tool.id] === 'done';
  return `
    <div class="tool-card ${isDownloaded ? 'downloaded' : ''}" id="card-${tool.id}">
      <div class="tool-card-top">
        <div class="tool-icon" style="background:${catData.bgColor}; color:${catData.color}">
          ${getToolIcon(tool.filename)}
        </div>
        <div class="tool-info">
          <div class="tool-name">${tool.name}</div>
          <div class="tool-cat">${tool.filename}</div>
        </div>
      </div>
      <div class="tool-progress"><div class="tool-progress-bar" id="bar-${tool.id}"></div></div>
      <div class="tool-status" id="status-${tool.id}">
        <span>${isDownloaded ? '✓' : '•'}</span> ${isDownloaded ? 'Downloaded' : 'Idle'}
      </div>
      <div class="tool-actions">
        <button class="btn-dl" id="dl-btn-${tool.id}" onclick="downloadTool('${tool.id}', '${escHtml(tool.url)}', '${escHtml(tool.filename)}')" ${isDownloaded ? 'disabled' : ''}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          ${isDownloaded ? 'Done' : 'Download'}
        </button>
        <button class="btn-run" id="run-btn-${tool.id}" onclick="openCheckerFolder()" ${!isDownloaded ? 'disabled' : ''}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="5,3 19,12 5,21"/></svg>
          Open Folder
        </button>
      </div>
    </div>
  `;
}

function getToolIcon(filename) {
  if (filename.endsWith('.exe')) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`;
  if (filename.endsWith('.msi')) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6M12 9v6"/></svg>`;
  if (filename.endsWith('.zip')) return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8l-5-5H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V8z"/><path d="M13 3v5h5"/></svg>`;
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>`;
}

function escHtml(s) {
  return s.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ─── Download - INSTANT DOWNLOADS ────────────────────────────────────────────

async function downloadTool(id, url, filename) {
  if (dlState[id] === 'downloading') return;

  setToolState(id, 'downloading', 'Downloading…');
  showNotification(`⏬ Downloading ${filename}...`, 'info');
  setStatus(`Downloading ${filename}`, 'busy');
  activeDownloads++;
  updateDlCount();

  if (!window.pywebview) {
    setTimeout(() => {
      setToolState(id, 'done', '✓ Downloaded');
      showNotification(`✅ ${filename} downloaded`, 'success');
      finishDownload(id);
      updateDownloadedCount();
      document.getElementById(`run-btn-${id}`)?.removeAttribute('disabled');
    }, 500);
    return;
  }

  try {
    const raw = await pywebview.api.download_file(url, filename);
    const res = JSON.parse(raw);
    
    if (res && res.ok) {
      setToolState(id, 'done', '✓ Downloaded');
      showNotification(`✅ ${filename} saved to Checker folder`, 'success');
      updateDownloadedCount();
      document.getElementById(`run-btn-${id}`)?.removeAttribute('disabled');
    } else {
      setToolState(id, 'error', '✗ Failed');
      showNotification(`❌ ${filename} failed: ${res?.error || 'Unknown error'}`, 'error');
    }
  } catch (err) {
    console.error('Download error:', err);
    setToolState(id, 'error', '✗ Error');
    showNotification(`❌ ${filename} error: ${err.message}`, 'error');
  }
  
  finishDownload(id);
}

function finishDownload(id) {
  activeDownloads = Math.max(0, activeDownloads - 1);
  updateDlCount();
  if (activeDownloads === 0) setStatus('Ready', 'idle');
}

function setToolState(id, state, msg) {
  dlState[id] = state;
  const card = document.getElementById(`card-${id}`);
  const statusEl = document.getElementById(`status-${id}`);
  const dlBtn = document.getElementById(`dl-btn-${id}`);

  if (!card) return;
  card.classList.remove('downloading', 'downloaded');
  if (state === 'downloading') card.classList.add('downloading');
  if (state === 'done') card.classList.add('downloaded');

  if (statusEl) {
    statusEl.className = `tool-status${state === 'downloading' ? ' status-downloading' : state === 'done' ? ' status-done' : state === 'error' ? ' status-error' : ''}`;
    statusEl.innerHTML = `<span>${state === 'done' ? '✓' : state === 'error' ? '✗' : '↻'}</span> ${msg}`;
  }

  if (dlBtn) {
    if (state === 'downloading') {
      dlBtn.disabled = true;
      dlBtn.innerHTML = '⏬ Downloading…';
    } else if (state === 'done') {
      dlBtn.disabled = true;
      dlBtn.innerHTML = '✅ Done';
    } else if (state === 'error') {
      dlBtn.disabled = false;
      dlBtn.innerHTML = '🔄 Retry';
    }
  }
}

async function downloadAllInCategory(cat) {
  const catData = TOOLS[cat];
  if (!catData) return;
  showNotification(`📦 Downloading all ${catData.label}...`, 'info');
  
  const downloadPromises = catData.tools.map(tool => {
    if (dlState[tool.id] !== 'done') {
      return downloadTool(tool.id, tool.url, tool.filename);
    }
    return Promise.resolve();
  });
  
  await Promise.all(downloadPromises);
  showNotification(`✅ All ${catData.label} downloads complete!`, 'success');
}

// ─── PowerShell Tab ───────────────────────────────────────────────────────────

function renderPSTab() {
  const grid = document.getElementById('ps-grid');
  if (!grid) return;
  grid.innerHTML = PS_SCRIPTS.map(ps => `
    <div class="ps-card">
      <div class="ps-card-name">${ps.name}</div>
      <div class="ps-card-desc">${ps.desc}</div>
      <button class="btn-ps-run" onclick="runPSScript('${ps.id}')">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="4,17 10,11 4,5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
        Run Script
      </button>
    </div>
  `).join('');
}

async function runPSScript(id) {
  const ps = PS_SCRIPTS.find(p => p.id === id);
  if (!ps) return;
  
  if (!window.pywebview) {
    alert('Python backend not available. Please run the compiled executable.');
    return;
  }

  showNotification(`▶ Running: ${ps.name}`, 'info');
  setStatus(`Running ${ps.name}`, 'busy');

  try {
    const raw = await pywebview.api.run_powershell(ps.script);
    const res = JSON.parse(raw);
    if (res.stdout && res.stdout.trim()) {
      const output = document.createElement('div');
      output.className = 'script-output';
      output.innerHTML = `<pre>${escapeHtml(res.stdout)}</pre>`;
      const container = document.getElementById('tab-powershell');
      container.appendChild(output);
      setTimeout(() => output.remove(), 30000);
    }
    if (res.stderr) showNotification(res.stderr.substring(0, 100), 'error');
    showNotification(`Exit code: ${res.exitCode}`, res.ok ? 'success' : 'warn');
  } catch (err) {
    showNotification(`Error: ${err.message}`, 'error');
  }
  setStatus('Ready', 'idle');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ─── USB Registry ─────────────────────────────────────────────────────────────

function renderUSBKeys() {
  const container = document.getElementById('usb-results');
  if (!container) return;
  container.innerHTML = USB_KEYS.map((key, i) => `
    <div class="usb-key-card" id="usb-${i}">
      <div class="usb-indicator"></div>
      <div class="usb-key-info">
        <div class="usb-key-path">${key}</div>
        <div class="usb-key-status" id="usb-status-${i}">Not scanned</div>
      </div>
    </div>
  `).join('');
}

async function runUSBScan() {
  showNotification('🔍 USB Registry Scan started…', 'info');
  setStatus('Scanning USB registry…', 'busy');

  for (let i = 0; i < USB_KEYS.length; i++) {
    const key = USB_KEYS[i];
    const card = document.getElementById(`usb-${i}`);
    const statusEl = document.getElementById(`usb-status-${i}`);
    if (statusEl) statusEl.textContent = 'Scanning…';

    if (!window.pywebview) {
      await sleep(100);
      card.className = 'usb-key-card not-found';
      statusEl.textContent = 'Cannot scan (no backend)';
      continue;
    }

    try {
      const raw = await pywebview.api.usb_check(key);
      const res = JSON.parse(raw);
      card.className = `usb-key-card ${res.exists ? 'found' : 'not-found'}`;
      statusEl.textContent = res.exists ? `⚠ Found (${res.count} subkeys)` : 'No devices found';
    } catch (err) {
      card.className = 'usb-key-card error';
      if (statusEl) statusEl.textContent = 'Error scanning';
    }
  }

  setStatus('USB scan complete', 'done');
  showNotification('✅ USB scan complete', 'success');
  setTimeout(() => setStatus('Ready', 'idle'), 2000);
}

function clearUSBResults() {
  renderUSBKeys();
  showNotification('USB results cleared', 'info');
}

// ─── Notifications ───────────────────────────────────────────────────────────

function showNotification(msg, type) {
  const container = document.getElementById('dl-toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `dl-toast ${type === 'error' ? 'error' : type === 'success' ? 'done' : ''}`;
  toast.innerHTML = `<div class="dl-toast-name">${msg.substring(0, 80)}</div>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ─── Status bar ───────────────────────────────────────────────────────────────

function setStatus(msg, state) {
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');
  if (dot) { dot.className = `dot ${state}`; }
  if (text) text.textContent = msg;
}

function updateDlCount() {
  const badge = document.getElementById('dl-count');
  if (!badge) return;
  if (activeDownloads > 0) {
    badge.textContent = `${activeDownloads} downloading`;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function updateDownloadedCount() {
  const el = document.getElementById('stat-downloaded');
  if (!el) return;
  const current = parseInt(el.textContent || '0');
  el.textContent = current + 1;
}

// ─── Misc ─────────────────────────────────────────────────────────────────────

function openCheckerFolder() {
  if (window.pywebview) {
    pywebview.api.open_folder();
  } else {
    alert('Please run the compiled executable to open folder');
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}