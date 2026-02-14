#!/bin/bash
# Run this script ON THE SERVER (where Nginx runs) as root or with sudo.
# Prerequisite: content of deploy/nginx-jaycalendar.conf is already at /etc/nginx/sites-available/jaycalendar.com

set -e
echo "=== Enabling site ==="
ln -sf /etc/nginx/sites-available/jaycalendar.com /etc/nginx/sites-enabled/
echo "=== Testing Nginx config ==="
nginx -t
echo "=== Restarting Nginx ==="
systemctl restart nginx
echo "=== Done. Check: https://jaycalendar.com/ads.txt ==="
