@echo off
title Building CheckTool
echo ========================================
echo    Building Check Tool v2.0
echo ========================================
echo.

:: Get the script's directory (where build.bat is located)
set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

echo Current directory: %CD%
echo.

:: Check if web folder exists
if not exist "%CD%\web" (
    echo ERROR: 'web' folder not found at %CD%\web
    echo Please make sure you have this structure:
    echo.
    echo %CD%
    echo ├── app.py
    echo ├── build.bat
    echo └── web\
    echo     ├── index.html
    echo     ├── style.css
    echo     └── app.js
    echo.
    pause
    exit /b 1
)

echo [1/3] Installing dependencies...
pip install pywebview pyinstaller --quiet

echo [2/3] Building executable...
pyinstaller --onefile ^
    --noconsole ^
    --name "CheckTool" ^
    --add-data "web;web" ^
    --hidden-import=webview ^
    --hidden-import=webview.platforms.winforms ^
    --clean ^
    --noconfirm ^
    app.py

if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

:: Copy to Desktop
echo [3/3] Copying to Desktop...
if exist "dist\CheckTool.exe" (
    copy /Y "dist\CheckTool.exe" "%USERPROFILE%\Desktop\CheckTool.exe" >nul
    echo.
    echo ========================================
    echo    BUILD SUCCESSFUL!
    echo ========================================
    echo.
    echo Executable created at: %USERPROFILE%\Desktop\CheckTool.exe
    echo.
    
    :: Optional: Open the Desktop folder
    explorer "%USERPROFILE%\Desktop"
) else (
    echo ERROR: CheckTool.exe not found in dist folder!
    dir dist\ 2>nul
)

pause