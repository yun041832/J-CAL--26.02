# QA Report: jaycalendar.com Nginx & Public Files

**Date:** 2025-02-08 (session)  
**Checked from:** Local (PowerShell / HTTP client)

---

## 1. https://jaycalendar.com/ads.txt

| Item        | Result   |
|------------|----------|
| HTTP Status| **200 OK** |
| Conclusion | ads.txt is publicly accessible. No 403 Forbidden. |

---

## 2. http://jaycalendar.com → https (301 redirect)

| Item        | Result   |
|------------|----------|
| HTTP Status| **301 Moved Permanently** |
| Location   | **https://jaycalendar.com/** |
| Conclusion | Correct 301 redirect to canonical HTTPS URL. |

---

## 3. https://jaycalendar.com/robots.txt

| Item        | Result   |
|------------|----------|
| HTTP Status| **200 OK** |
| Conclusion | robots.txt is accessible. |

---

## 4. Permission (403) check

- **ads.txt** returned **200**, not 403. No permission fix was required.
- If you ever see **403 Forbidden** for ads.txt on the server, run:
  ```bash
  sudo chmod 644 /var/www/jaycalendar.com/ads.txt
  sudo chown www-data:www-data /var/www/jaycalendar.com/ads.txt
  ```
  (Adjust user/group if your Nginx runs as `nginx` or another user.)

---

## Summary

| URL                        | Expected | Actual | Pass |
|----------------------------|----------|--------|------|
| https://jaycalendar.com/ads.txt | 200      | 200    | Yes  |
| http://jaycalendar.com     | 301 → https | 301 → https://jaycalendar.com/ | Yes  |
| https://jaycalendar.com/robots.txt | 200      | 200    | Yes  |

All checks passed.
