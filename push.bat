@echo off
title Push to GitHub (Bhaav-website)
echo ========================================================
echo Pushing 3D Website to:
echo https://github.com/bhaavinstitute396/Bhaav-website.git
echo ========================================================
echo.
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo [SUCCESS] Pushed successfully to GitHub!
) else (
    echo [INFO] If prompted above, please complete the sign-in with your browser.
)
pause
