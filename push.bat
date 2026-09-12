@echo off
title Auto Push to GitHub & Live Deploy
echo ========================================================
echo Saving changes and publishing to GitHub...
echo ========================================================
echo.
git add .
git commit -m "Update website content"
git push origin main
echo.
if %errorlevel% equ 0 (
    echo [SUCCESS] Changes pushed! Vercel is now deploying your live site.
) else (
    echo [INFO] Everything is up-to-date or already pushed.
)
pause
