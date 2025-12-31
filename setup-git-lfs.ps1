# PowerShell script to set up Git LFS for video files
# Run this script before your first git commit

Write-Host "Setting up Git LFS for large video files..." -ForegroundColor Cyan

# Check if Git LFS is installed
try {
    git lfs version | Out-Null
    Write-Host "✓ Git LFS is installed" -ForegroundColor Green
} catch {
    Write-Host "✗ Git LFS is not installed!" -ForegroundColor Red
    Write-Host "Please install Git LFS from: https://git-lfs.github.com/" -ForegroundColor Yellow
    Write-Host "Or use Chocolatey: choco install git-lfs" -ForegroundColor Yellow
    exit 1
}

# Initialize Git LFS
Write-Host "`nInitializing Git LFS..." -ForegroundColor Cyan
git lfs install

# Track MP4 files
Write-Host "Tracking MP4 files with LFS..." -ForegroundColor Cyan
git lfs track "*.mp4"
git lfs track "public/*.mp4"

# Add .gitattributes
Write-Host "Adding .gitattributes..." -ForegroundColor Cyan
git add .gitattributes

Write-Host "`n✓ Git LFS setup complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. git add ." -ForegroundColor White
Write-Host "2. git commit -m 'Initial commit'" -ForegroundColor White
Write-Host "3. Create a GitHub repository" -ForegroundColor White
Write-Host "4. git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor White
Write-Host "5. git push -u origin main" -ForegroundColor White

