:: start_dev_server.bat

:: simple script to start oreohive.org dev server
:: relies upon .env file in the same directory that sets DEV_PROJECT_PATH env

:: made specifically for windows losers, gnu+linux untested
:: development assisted by crap llm ok

@echo off

:: check for adjacent .env file (in same parent directory)
setlocal enabledelayedexpansion
set "script_dir=%~dp0"
set "env_file=%script_dir%.env"

:: load if exists
if exist "%env_file%" (
    for /f "tokens=1,2 delims==" %%a in ('type "%env_file%"') do (
        if "%%a"=="DEV_PROJECT_PATH" set "DEV_PROJECT_PATH=%%b"
    )
)
:: check if environment variable is set
if "%DEV_PROJECT_PATH%"=="" (
    echo the 'DEV_PROJECT_PATH' variable is not set.
    echo either set it in the environment or create a '.env' file with:
    echo DEV_PROJECT_PATH=C:\users\yourname\projects\my-app
    pause
    exit /b
)

:: verify directory exists
if not exist "%DEV_PROJECT_PATH%" (
    echo the directory specified in 'DEV_PROJECT_PATH' does not exist: %DEV_PROJECT_PATH%
    pause
    exit /b
)
:: navigate to directory
cd /d "%DEV_PROJECT_PATH%"

:: run npm run dev; start dev server
echo starting 'npm run dev' in %DEV_PROJECT_PATH%
:: start npm run dev in a new cmd window so the browser can be opened in parallel
start cmd /k "npm run dev"

:: wait a few seconds for dev server to start
timeout /t 4 /nobreak >nul
:: open localhost:5173 in default browser
start http://localhost:5173

pause