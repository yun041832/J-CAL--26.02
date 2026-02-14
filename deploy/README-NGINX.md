# Nginx: Canonical URL 설정 (https://jaycalendar.com)

## 목적
- `http://jaycalendar.com` → **301** → `https://jaycalendar.com`
- `http://www.jaycalendar.com` → **301** → `https://jaycalendar.com`
- `https://www.jaycalendar.com` → **301** → `https://jaycalendar.com`
- Canonical URL: **https://jaycalendar.com** 만 사용 (SEO·ads.txt 일원화)

---

## 1. 설정 파일 위치 (서버에서)

- **적용할 설정**: `nginx-jaycalendar.conf`
- **서버 경로**: `/etc/nginx/sites-available/jaycalendar.com`

---

## 2. 적용 절차 (서버 SSH 접속 후)

### 2.1 기존 설정 백업
```bash
sudo cp /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-available/jaycalendar.com.bak
```
(파일이 없으면 생략)

### 2.2 웹 루트 확인
현재 사이트가 제공되는 디렉터리를 확인한 뒤, `nginx-jaycalendar.conf` 안의 `root` 값을 그대로 맞춥니다.

- 예: 실제 루트가 `/var/www/html` 이면  
  `root /var/www/jaycalendar.com;` → `root /var/www/html;` 로 변경

### 2.3 설정 파일 반영
로컬의 `deploy/nginx-jaycalendar.conf` 내용을 서버의 `/etc/nginx/sites-available/jaycalendar.com` 에 덮어씁니다.

- **로컬(Windows)에서**: 내용 복사 후 서버에 붙여넣기  
  또는  
  `scp deploy/nginx-jaycalendar.conf user@server:/tmp/`  
  후 서버에서:  
  `sudo cp /tmp/nginx-jaycalendar.conf /etc/nginx/sites-available/jaycalendar.com`

### 2.4 사이트 활성화 (심볼릭 링크)
```bash
sudo ln -sf /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-enabled/
```

### 2.5 SSL 경로 확인 (Certbot)
Certbot으로 발급한 인증서 경로가 다르면 수정합니다.

- 기본 예:  
  `ssl_certificate /etc/letsencrypt/live/jaycalendar.com/fullchain.pem;`  
  `ssl_certificate_key /etc/letsencrypt/live/jaycalendar.com/privkey.pem;`
- 도메인이 `www.jaycalendar.com` 으로만 발급된 경우:  
  `live/www.jaycalendar.com/` 경로로 바꿔도 됩니다.  
  (두 server 블록 모두 동일 경로 사용 가능)

### 2.6 문법 검사 후 재시작
```bash
sudo nginx -t && sudo systemctl restart nginx
```

---

## 3. 확인

- 브라우저에서:
  - `http://jaycalendar.com` → 주소창이 `https://jaycalendar.com` 로 바뀌는지
  - `http://www.jaycalendar.com` → `https://jaycalendar.com` 로 이동하는지
  - `https://www.jaycalendar.com` → `https://jaycalendar.com` 로 이동하는지
- `https://jaycalendar.com/ads.txt` 접속 시 내용이 정상 노출되는지

---

## 4. 요약 명령 (root 경로·SSL 경로 이미 맞춘 뒤)

```bash
sudo nginx -t && sudo systemctl restart nginx
```
