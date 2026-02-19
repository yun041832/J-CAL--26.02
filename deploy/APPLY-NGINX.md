# Nginx 적용: https://www.jaycalendar.com 단일 Canonical

## 요구사항 충족
- `http://jaycalendar.com` → **301** → `https://www.jaycalendar.com`
- `http://www.jaycalendar.com` → **301** → `https://www.jaycalendar.com`
- `https://jaycalendar.com` → **301** → `https://www.jaycalendar.com`
- Canonical URL: **https://www.jaycalendar.com** 만 사용 (SEO·구글 서치콘솔)
- `root` 설정으로 **https://www.jaycalendar.com/ads.txt** 제공

---

## 1. 설정 파일 위치 (서버)

| 용도 | 경로 |
|------|------|
| 복사할 파일 (로컬) | `deploy/nginx-jaycalendar.conf` |
| 서버 대상 경로 | `/etc/nginx/sites-available/jaycalendar.com` |

또는 기존에 `default`만 쓰는 경우:  
`/etc/nginx/sites-available/default` 를 백업한 뒤, 아래 설정으로 **교체**해도 됩니다.

---

## 2. 적용 순서 (서버 SSH 접속 후)

### 2.1 백업 (기존 설정이 있을 때)
```bash
sudo cp /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-available/jaycalendar.com.bak
```
또는 default 사용 시:
```bash
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.bak
```

### 2.2 설정 내용 반영
- 로컬 `deploy/nginx-jaycalendar.conf` **전체 내용**을 복사한 뒤  
- 서버에서 `sudo nano /etc/nginx/sites-available/jaycalendar.com` 로 열고  
- 기존 내용을 **전부 삭제**하고 붙여넣기 후 저장 (Ctrl+O, Enter, Ctrl+X).

**웹 루트가 다른 경우** (예: `/var/www/html`):  
설정 안의 `root /var/www/jaycalendar.com;` 를 실제 경로로 수정 (한 곳만).

### 2.3 사이트 활성화
```bash
sudo ln -sf /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-enabled/
```
※ `default`를 쓰지 않으려면:  
`sudo rm -f /etc/nginx/sites-enabled/default`

### 2.4 문법 검사 및 재시작
```bash
sudo nginx -t && sudo systemctl restart nginx
```
- **sudo 비밀번호**를 묻면 서버 로그인 비밀번호 입력.
- `nginx -t` 가 성공해야 `systemctl restart nginx` 가 실행됨.

### 2.5 확인
- 브라우저: `http://jaycalendar.com` → `https://www.jaycalendar.com` 으로 넘어가는지.
- **https://www.jaycalendar.com/ads.txt** 접속 시 내용 노출 여부.

---

## 3. 한 줄 요약 (설정 이미 복사된 상태에서)

```bash
sudo ln -sf /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-enabled/ && sudo nginx -t && sudo systemctl restart nginx
```
