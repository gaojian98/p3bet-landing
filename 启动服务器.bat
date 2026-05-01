@echo off
chcp 65001 >nul
echo ========================================
echo   P3BET 落地页 - 本地服务器启动脚本
echo ========================================
echo.

REM 检查 Python 是否安装
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Python，请先安装 Python
    echo.
    echo 下载地址: https://www.python.org/downloads/
    echo.
    pause
    exit /b
)

echo [信息] 正在启动本地服务器...
echo.
echo 服务器地址: http://localhost:8080
echo.
echo 可用页面:
echo   - 优化版 (推荐): http://localhost:8080/index-optimized.html
echo   - 单文件版:     http://localhost:8080/index-new.html
echo   - 测试页面:     http://localhost:8080/test-validation.html
echo.
echo ========================================
echo 提示: 按 Ctrl+C 停止服务器
echo ========================================
echo.

REM 启动服务器
python -m http.server 8080

pause
