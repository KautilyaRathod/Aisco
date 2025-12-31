# VPS Deployment Guide

This guide will help you deploy the AISCO project on a VPS with nginx as a reverse proxy.

## Prerequisites

- Ubuntu/Debian VPS (20.04+ recommended)
- Domain name pointing to your VPS IP
- SSH access to your VPS
- Node.js 18+ and npm installed
- MySQL/MariaDB installed
- Nginx installed

## Step 1: Server Setup

### Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MySQL
sudo apt install -y mysql-server

# Install Nginx
sudo apt install -y nginx

# Install PM2 (process manager)
sudo npm install -g pm2
```

## Step 2: Database Setup

```bash
# Secure MySQL installation
sudo mysql_secure_installation

# Create database and user
sudo mysql -u root -p
```

In MySQL:
```sql
CREATE DATABASE aisco CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'aisco_user'@'localhost' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON aisco.* TO 'aisco_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

Create database tables:
```bash
mysql -u aisco_user -p aisco < database_schema.sql
```

## Step 3: Upload Project to VPS

### Option A: Using Git (Recommended)

```bash
# On your local machine
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# On VPS
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git yourdomain.com
cd yourdomain.com/project
```

### Option B: Using SCP

```bash
# On your local machine
scp -r project/ user@your-vps-ip:/var/www/yourdomain.com/
```

## Step 4: Install Dependencies

```bash
cd /var/www/yourdomain.com/project
npm install --production
```

## Step 5: Configure Environment Variables

```bash
# Copy example env file
cp .env.example .env

# Edit with your values
nano .env
```

Update `.env`:
```env
PORT=4000
HOST=0.0.0.0
NODE_ENV=production

MYSQL_HOST=localhost
MYSQL_USER=aisco_user
MYSQL_PASSWORD=strong_password_here
MYSQL_DATABASE=aisco

CLIENT_URL=https://yourdomain.com
SERVE_STATIC=false
```

## Step 6: Build Frontend

```bash
# Install dev dependencies for build
npm install

# Build frontend
npm run build
```

## Step 7: Configure Nginx

```bash
# Copy nginx config
sudo cp nginx.conf.example /etc/nginx/sites-available/yourdomain.com

# Edit with your domain
sudo nano /etc/nginx/sites-available/yourdomain.com
```

Update the config:
- Replace `yourdomain.com` with your actual domain
- Update `root` path to `/var/www/yourdomain.com/project/dist`

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

## Step 8: Start Backend with PM2

```bash
cd /var/www/yourdomain.com/project

# Start server with PM2
pm2 start server.cjs --name aisco-api

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Step 9: Setup SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Certbot will automatically update nginx config
# Test auto-renewal
sudo certbot renew --dry-run
```

## Step 10: Firewall Configuration

```bash
# Allow HTTP, HTTPS, and SSH
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Step 11: Verify Deployment

1. **Check backend health:**
   ```bash
   curl http://localhost:4000/api/health
   ```

2. **Check nginx:**
   ```bash
   sudo systemctl status nginx
   ```

3. **Check PM2:**
   ```bash
   pm2 status
   pm2 logs aisco-api
   ```

4. **Visit your domain:**
   - Frontend: `https://yourdomain.com`
   - API Health: `https://yourdomain.com/api/health`

## Maintenance Commands

```bash
# View logs
pm2 logs aisco-api
sudo tail -f /var/log/nginx/error.log

# Restart services
pm2 restart aisco-api
sudo systemctl restart nginx

# Update application
cd /var/www/yourdomain.com/project
git pull
npm install
npm run build
pm2 restart aisco-api
```

## Troubleshooting

### Backend not responding
- Check if PM2 process is running: `pm2 status`
- Check logs: `pm2 logs aisco-api`
- Verify database connection in `.env`

### 502 Bad Gateway
- Check if backend is running on port 4000: `netstat -tulpn | grep 4000`
- Verify nginx proxy_pass URL matches backend port
- Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### CORS errors
- Verify `CLIENT_URL` in `.env` matches your domain
- Check nginx headers are being forwarded correctly

### Static files not loading
- Verify build output exists: `ls -la dist/`
- Check nginx root path is correct
- Verify file permissions: `sudo chown -R www-data:www-data dist/`

## Security Checklist

- [ ] Change default MySQL root password
- [ ] Use strong database user password
- [ ] Keep `.env` file secure (not in git)
- [ ] Enable firewall (UFW)
- [ ] Setup SSL certificate
- [ ] Keep system and packages updated
- [ ] Use PM2 for process management
- [ ] Setup log rotation
- [ ] Regular backups of database

## Database Backup

```bash
# Create backup
mysqldump -u aisco_user -p aisco > backup_$(date +%Y%m%d).sql

# Restore backup
mysql -u aisco_user -p aisco < backup_20231112.sql
```

