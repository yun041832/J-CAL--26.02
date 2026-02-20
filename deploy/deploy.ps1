# J-Calendar AWS EC2 배포 스크립트
# 사용: .\deploy.ps1 또는 터미널에서 "deploy" (alias 설정 시)

$ErrorActionPreference = "Stop"
$keyPath = "C:\Users\yun04\keypair\j-cal.pem"
$hostAddr = "13.124.99.117"
$user = "ec2-user"
$targetDir = "/var/www/html"
$projectRoot = (Resolve-Path (Split-Path -Parent $PSScriptRoot)).Path

Write-Host "=== J-Calendar 배포 시작 ===" -ForegroundColor Cyan
$fileList = @()
foreach ($f in @("index.html", "style.css", "app.js")) {
    $fp = Join-Path $projectRoot $f
    if (-not (Test-Path $fp)) { Write-Error "파일 없음: $fp"; exit 1 }
    $fileList += $fp
}

Push-Location $projectRoot
# SCP: 로컬 → 서버 /tmp/
Write-Host "SCP 전송 중..." -ForegroundColor Yellow
scp -i $keyPath -o StrictHostKeyChecking=accept-new index.html style.css app.js insight.html sitemap.xml "${user}@${hostAddr}:/tmp/"
scp -i $keyPath -o StrictHostKeyChecking=accept-new -r insight "${user}@${hostAddr}:/tmp/"

# SSH: /tmp → /var/www/html (sudo)
Write-Host "서버 반영 중..." -ForegroundColor Yellow
$cmd = "sudo rm -f $targetDir/sitemap-0.xml && sudo cp /tmp/index.html /tmp/style.css /tmp/app.js /tmp/insight.html /tmp/sitemap.xml $targetDir/ && sudo mkdir -p $targetDir/insight && sudo cp -r /tmp/insight/* $targetDir/insight/ && echo '배포 완료'"
ssh -i $keyPath -o StrictHostKeyChecking=accept-new "${user}@${hostAddr}" $cmd

Write-Host "=== 배포 고속도로 개통 완료 및 라이브 서버 반영 성공 ===" -ForegroundColor Green
