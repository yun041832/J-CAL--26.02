# Nginx 적용: 터미널 명령 순서

**전제:** 서버에 SSH로 접속한 뒤, 아래를 순서대로 실행하세요.

---

## Step 1: 설정 파일 전체 교체

설정 내용을 서버의 Nginx 파일로 넣어야 합니다.

**방법 A – 서버에서 직접 편집**
```bash
sudo nano /etc/nginx/sites-available/jaycalendar.com
```
- 기존 내용 **전부 삭제**
- 로컬 파일 `deploy/sites-available-jaycalendar.com` 내용 **전체 복사** 후 붙여넣기
- 저장: `Ctrl+O` → Enter → `Ctrl+X`

**방법 B – SCP로 파일 복사 후 덮어쓰기 (로컬 PowerShell에서)**  
로컬에서:
```powershell
scp "C:\Users\yun04\Desktop\J-CAL\deploy\sites-available-jaycalendar.com" 사용자명@서버주소:/tmp/
```
서버에서:
```bash
sudo cp /tmp/sites-available-jaycalendar.com /etc/nginx/sites-available/jaycalendar.com
```

---

## Step 2: 심볼릭 링크 생성
```bash
sudo ln -sf /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-enabled/
```

---

## Step 3: 설정 검사 및 Nginx 재시작
```bash
sudo nginx -t && sudo systemctl restart nginx
```
- `sudo` 비밀번호를 묻면 서버 로그인 비밀번호 입력
- `nginx -t` 가 성공해야 재시작이 실행됨

---

## root 경로가 다른 경우

사이트 파일이 **`/var/www/jaycalendar.com` 이 아닌 다른 경로**에 있으면,  
해당 경로를 알려주시면 `root` 지시문만 그 경로로 수정한 설정을 드리겠습니다.

예: `/var/www/html` 이면 `root /var/www/html;` 로 변경
