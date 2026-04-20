# VPS Deployment Guide

Deploy AISCO with **nginx**, **PHP-FPM**, and **MySQL** (no Node process for the API).

## Prerequisites

- Ubuntu/Debian VPS (20.04+ recommended)
- Domain name pointing to your VPS IP
- SSH access
- Node.js 18+ and npm (for **building** the frontend only)
- PHP 8+ with FPM, `pdo_mysql`, `mbstring`, `openssl` (for PHPMailer)
- Composer
- MySQL/MariaDB
- Nginx

## Step 1: Server setup

```bash
sudo apt update && sudo apt upgrade -y

# Node (frontend build only)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# PHP-FPM + extensions
sudo apt install -y php-fpm php-mysql php-mbstring php-xml curl unzip

# Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# MySQL + Nginx
sudo apt install -y mysql-server nginx
```

## Step 2: Database

```bash
sudo mysql_secure_installation
sudo mysql -u root -p
```

```sql
CREATE DATABASE aisco CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'aisco_user'@'localhost' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON aisco.* TO 'aisco_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Import schema (from your project clone):

```bash
mysql -u aisco_user -p aisco < /var/www/yourdomain.com/project/aisco.sql
```

## Step 3: Upload project

Same as before (git clone or SCP) into e.g. `/var/www/yourdomain.com/project`.

## Step 4: Install dependencies

```bash
cd /var/www/yourdomain.com/project

# Frontend
npm ci
npm run build

# PHP API
cd api
composer install --no-dev --optimize-autoloader
cp .env.example .env
nano .env
```

Set in `api/.env` at least: `MYSQL_*`, `SMTP_*`, `CLIENT_URL=https://yourdomain.com`, `APP_ENV=production`, `API_PATH_PREFIX=/api`.

## Step 5: File permissions

```bash
sudo chown -R www-data:www-data /var/www/yourdomain.com/project/api
```

## Step 6: Nginx

```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/yourdomain.com
sudo nano /etc/nginx/sites-available/yourdomain.com
```

- Replace `yourdomain.com` and paths (`/var/www/yourdomain.com/project`).
- Set `fastcgi_pass` to your PHP socket (e.g. `ls /run/php/`).

```bash
sudo ln -sf /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Step 7: PHP-FPM

```bash
sudo systemctl enable php8.2-fpm
sudo systemctl restart php8.2-fpm
```

Adjust version (`php8.1-fpm`, etc.) to match `apt install`.

## Step 8: SSL (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Step 9: Firewall

```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Step 10: Verify

```bash
curl -s http://localhost/api/health
curl -s https://yourdomain.com/api/health
```

Visit the site; forms should post to `/api/*`.

## Maintenance

```bash
cd /var/www/yourdomain.com/project
git pull
npm ci
npm run build
cd api && composer install --no-dev --optimize-autoloader
sudo systemctl reload php8.2-fpm nginx
```

## Troubleshooting

### API 502 / 404

- Check PHP-FPM: `sudo systemctl status php8.2-fpm`
- Confirm `SCRIPT_FILENAME` in nginx matches `api/public/index.php` on disk
- Confirm `api/.env` exists and `API_PATH_PREFIX=/api`

### CORS

- Set `CLIENT_URL` in `api/.env` to your public origin (e.g. `https://yourdomain.com`)

### Database errors

- Test: `mysql -u aisco_user -p aisco -e "SELECT 1"`

## Database backup

```bash
mysqldump -u aisco_user -p aisco > backup_$(date +%Y%m%d).sql
```

## Security checklist

- [ ] Strong MySQL user password
- [ ] `api/.env` not in git
- [ ] UFW enabled
- [ ] HTTPS via Certbot
- [ ] Keep system packages updated
