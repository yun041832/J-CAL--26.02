# Apply Nginx config for https://jaycalendar.com

## Step 1 — Apply the config (you do this)

1. Open on the **server**: `/etc/nginx/sites-available/jaycalendar.com`  
   (if it doesn't exist: `sudo nano /etc/nginx/sites-available/jaycalendar.com` to create it)
2. **Delete all existing content** in that file.
3. **Paste the entire code block** from the section below (or from `sites-available-jaycalendar.com`).
4. Save and exit (e.g. Ctrl+O, Enter, Ctrl+X in nano).

---

## Code block (replace entire file content)

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name jaycalendar.com www.jaycalendar.com;
    return 301 https://jaycalendar.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.jaycalendar.com;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    ssl_certificate /etc/letsencrypt/live/jaycalendar.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jaycalendar.com/privkey.pem;
    return 301 https://jaycalendar.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name jaycalendar.com;
    root /var/www/jaycalendar.com;
    index index.html;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    ssl_certificate /etc/letsencrypt/live/jaycalendar.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jaycalendar.com/privkey.pem;
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
    location = /ads.txt {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=3600";
    }
    location = /robots.txt {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=86400";
    }
}
```

---

## Step 2 — Terminal commands (run on server after Step 1)

Run these in order on the server (SSH). If prompted for a password, use your **server login (sudo) password**.

**2.1 Create symbolic link**
```bash
sudo ln -sf /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-enabled/
```

**2.2 Test config and restart Nginx**
```bash
sudo nginx -t && sudo systemctl restart nginx
```

---

## Done

- Check: https://jaycalendar.com  
- Check: https://jaycalendar.com/ads.txt  

If `sudo` asks for a password, enter your server user password.
