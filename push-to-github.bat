@echo off
REM ============================================
REM Jophrey Cleaning - GitHub Push Script
REM ============================================
REM This script automatically pushes your code to GitHub

setlocal enabledelayedexpansion

echo.
echo ========================================
echo Jophrey Cleaning - GitHub Push
echo ========================================
echo.

REM Navigate to project folder
cd /d "c:\Irenes Web"
if errorlevel 1 (
    echo ERROR: Could not navigate to project folder
    pause
    exit /b 1
)

echo [1/8] Configuring Git user...
git config --global user.name "Josh"
git config --global user.email "josh902@github.com"
echo ✓ Git user configured

echo.
echo [2/8] Initializing Git repository...
if exist .git (
    echo ✓ Git already initialized
) else (
    git init
    if errorlevel 1 (
        echo ERROR: Git init failed
        pause
        exit /b 1
    )
    echo ✓ Git initialized
)

echo.
echo [3/8] Staging all files...
git add .
if errorlevel 1 (
    echo ERROR: Git add failed
    pause
    exit /b 1
)
echo ✓ All files staged

echo.
echo [4/8] Creating initial commit...
git commit -m "Initial commit: Jophrey Cleaning Services - Production Ready"
if errorlevel 1 (
    echo Note: Files might already be committed
)
echo ✓ Commit created

echo.
echo [5/8] Adding GitHub remote...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/josh902/irene-cleaning.git
if errorlevel 1 (
    echo ERROR: Could not add remote
    pause
    exit /b 1
)
echo ✓ GitHub remote added

echo.
echo [6/8] Setting main branch...
git branch -M main
if errorlevel 1 (
    echo Note: Branch might already be main
)
echo ✓ Branch set to main

echo.
echo [7/8] Pushing to GitHub...
echo NOTE: You may be prompted to authenticate with GitHub
echo If a browser opens, log in and approve access
echo Then return to this window
echo.
git push -u origin main
if errorlevel 1 (
    echo.
    echo ERROR: Git push failed
    echo This might be due to:
    echo - Network issues
    echo - GitHub authentication
    echo - Repository permissions
    echo.
    echo Try these steps manually:
    echo 1. Open Command Prompt
    echo 2. Run: cd "c:\Irenes Web"
    echo 3. Run: git push -u origin main
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✓ CODE PUSHED TO GITHUB SUCCESSFULLY!
echo ========================================
echo.
echo Your code is now at:
echo https://github.com/josh902/irene-cleaning
echo.
echo Next step: Deploy to Vercel
echo 1. Go to https://vercel.com/new
echo 2. Click "Import Project"
echo 3. Select GitHub
echo 4. Find "irene-cleaning"
echo 5. Click "Deploy"
echo.
echo This will take 2-3 minutes and give you a live URL!
echo.
pause
