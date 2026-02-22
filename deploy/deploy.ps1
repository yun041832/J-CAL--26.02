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

# insight 60개 HTML — 업로드 대상 목록 출력 후 일괄 전송
$insightFiles = Get-ChildItem insight -Filter "*.html" | Where-Object { $_.Name -match "insight-[pb]\d" } | Sort-Object Name
$idx = 0
foreach ($f in $insightFiles) { $idx++; Write-Host "Uploading[$idx/60] $($f.Name)" -ForegroundColor Gray }
scp -i $keyPath -o StrictHostKeyChecking=accept-new -r insight "${user}@${hostAddr}:/tmp/"

# SSH: /tmp → /var/www/html (sudo) — 서버 insight 강제 동기화
Write-Host "서버 반영 중 (insight 폴더 완전 초기화 후 60개 강제 덮어쓰기)..." -ForegroundColor Yellow
$cmd = "sudo mkdir -p /tmp/insight 2>/dev/null; sudo rm -f $targetDir/sitemap-0.xml && sudo cp /tmp/index.html /tmp/style.css /tmp/app.js /tmp/insight.html /tmp/sitemap.xml $targetDir/ && sudo mkdir -p $targetDir/insight && sudo rm -rf $targetDir/insight/* && sudo cp -r /tmp/insight/* $targetDir/insight/ && echo '=== 배포 완료 ===' && echo '서버 insight HTML 개수:' && ls -1 $targetDir/insight/*.html 2>/dev/null | wc -l"
ssh -i $keyPath -o StrictHostKeyChecking=accept-new "${user}@${hostAddr}" $cmd

Write-Host "=== 배포 고속도로 개통 완료 및 라이브 서버 반영 성공 ===" -ForegroundColor Green
