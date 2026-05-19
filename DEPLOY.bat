@echo off
REM ============================================
REM Jophrey Cleaning Services - Deployment Script
REM ============================================
REM This script automates the deployment to Vercel
REM Prerequisites: Node.js, Git, GitHub account
REM ============================================

setlocal enabledelayedexpansion

echo.
echo ================================
echo Jophrey Cleaning - Deploy Script
echo ================================
echo.

REM Set variables
set PROJECT_NAME=irene-cleaning
set GITHUB_USER=josh902
set PROJECT_DIR=%CD%

echo [1/7] Checking prerequisites...
REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js not found. Please install from https://nodejs.org/
    pause
    exit /b 1
)
echo ✓ Node.js found

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git not found. Please install from https://git-scm.com/
    pause
    exit /b 1
)
echo ✓ Git found

echo.
echo [2/7] Initializing Git repository...
if not exist .git (
    git init
    echo ✓ Git initialized
) else (
    echo ✓ Git already initialized
)

echo.
echo [3/7] Installing Next.js project structure...
REM Check if package.json exists
if not exist package.json (
    echo Installing Next.js...
    call npm install next react react-dom
    echo ✓ Next.js installed
) else (
    echo ✓ Next.js already installed
)

echo.
echo [4/7] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo ✓ Dependencies installed

echo.
echo [5/7] Testing build locally...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed. Check error messages above.
    pause
    exit /b 1
)
echo ✓ Build successful

echo.
echo [6/7] Committing to Git...
git add .
git commit -m "Initial commit: Jophrey Cleaning Services - Production ready"
if errorlevel 1 (
    echo NOTE: Git commit warning (might already be committed)
)
echo ✓ Committed to Git

echo.
echo ================================
echo NEXT STEPS - Manual Actions
echo ================================
echo.
echo 1. PUSH TO GITHUB:
echo    git remote add origin https://github.com/%GITHUB_USER%/%PROJECT_NAME%.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 2. DEPLOY TO VERCEL:
echo    a) Go to https://vercel.com
echo    b) Click "Import Project"
echo    c) Select GitHub and find "%PROJECT_NAME%"
echo    d) Click Deploy
echo.
echo 3. VERIFY DEPLOYMENT:
echo    Once Vercel finishes, you'll get a live URL like:
echo    https://%PROJECT_NAME%.vercel.app
echo.
echo ================================
echo Project is ready for deployment!
echo ================================
echo.
pause
