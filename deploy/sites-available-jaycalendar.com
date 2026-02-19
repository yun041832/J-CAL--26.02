# Replace ENTIRE content of /etc/nginx/sites-available/jaycalendar.com with this file.
# Canonical: https://www.jaycalendar.com | root: /var/www/jaycalendar.com | SEO 301 redirects

server {
    listen 80;
    listen [::]:80;
    server_name jaycalendar.com www.jaycalendar.com;
    return 301 https://www.jaycalendar.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name jaycalendar.com;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    ssl_certificate /etc/letsencrypt/live/jaycalendar.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jaycalendar.com/privkey.pem;
    return 301 https://www.jaycalendar.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.jaycalendar.com;
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
