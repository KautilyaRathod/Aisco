# GitHub Upload Guide

## Problem: Large Video File (210MB)
GitHub has a **100MB file size limit**. Your video file `AISCO Spot Review 1080p-PM4.mp4` is 210MB, so it cannot be uploaded directly.

## Solution Options

### Option 1: Use Git LFS (Large File Storage) ⭐ RECOMMENDED

Git LFS allows you to store large files in Git while keeping the repository size manageable.

#### Steps:

1. **Install Git LFS** (if not already installed):
   ```bash
   # Windows (using Chocolatey)
   choco install git-lfs
   
   # Or download from: https://git-lfs.github.com/
   ```

2. **Initialize Git LFS in your repository**:
   ```bash
   cd project
   git lfs install
   ```

3. **Track video files with LFS**:
   ```bash
   git lfs track "*.mp4"
   git lfs track "public/*.mp4"
   ```

4. **Add the .gitattributes file** (created by LFS):
   ```bash
   git add .gitattributes
   ```

5. **Add your files and commit**:
   ```bash
   git add .
   git commit -m "Initial commit with LFS for video files"
   ```

6. **Create GitHub repository and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

**Note**: Git LFS has free tier limits (1GB storage, 1GB bandwidth/month). For larger needs, consider paid plans or Option 2.

---

### Option 2: Exclude Video and Host Externally

Host the video on a CDN or cloud storage (YouTube, Vimeo, AWS S3, Cloudinary, etc.) and reference it in your code.

#### Steps:

1. **Update .gitignore** to exclude large videos:
   ```bash
   # Add to .gitignore
   *.mp4
   public/*.mp4
   ```

2. **Upload video to external hosting**:
   - **YouTube** (free, unlisted): Upload and embed
   - **Cloudinary** (free tier): Image/video CDN
   - **AWS S3** + CloudFront: Professional solution
   - **Vimeo**: Video hosting platform

3. **Update your code** to reference the external URL:
   ```tsx
   // Instead of: src="/AISCO Spot Review 1080p-PM4.mp4"
   // Use: src="https://your-cdn-url.com/video.mp4"
   ```

4. **Commit and push** (video excluded):
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

---

### Option 3: Compress the Video

Reduce the video file size to under 100MB.

#### Tools:
- **HandBrake** (free): https://handbrake.fr/
- **FFmpeg** (command line):
  ```bash
  ffmpeg -i "AISCO Spot Review 1080p-PM4.mp4" -crf 28 -preset slow "AISCO Spot Review 1080p-COMPRESSED.mp4"
  ```

Then follow normal Git upload process.

---

## Recommended Approach

**For Production**: Use **Option 2** (external hosting) - better performance, no Git LFS costs, faster repository clones.

**For Development**: Use **Option 1** (Git LFS) - keeps everything in one place.

---

## Additional Notes

- **Never commit `.env` files** - they're already in `.gitignore`
- **Remove sensitive data** before pushing (database passwords, API keys)
- Consider using environment variables for production
- The video file is in `public/AISCO Spot Review 1080p-PM4.mp4`

