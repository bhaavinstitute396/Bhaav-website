@echo off
title 3D Website Dev Server
echo Starting 3D Website on Localhost...
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
npm run dev
pause
