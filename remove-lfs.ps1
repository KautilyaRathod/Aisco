# Script to remove Git LFS and exclude video files
Write-Host "Removing Git LFS tracking..." -ForegroundColor Cyan

# Untrack LFS files
git lfs untrack "*.mp4"
git lfs untrack "public/*.mp4"

# Remove .gitattributes if it exists (created by LFS)
if (Test-Path .gitattributes) {
    Write-Host "Removing .gitattributes..." -ForegroundColor Yellow
    Remove-Item .gitattributes
}

# Remove video file from git index (but keep local file)
Write-Host "Removing video file from git index..." -ForegroundColor Cyan
git rm --cached "public/AISCO Spot Review 1080p-PM4.mp4" -r 2>$null

# Add updated .gitignore
git add .gitignore

Write-Host "`n✓ Git LFS removed!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Commit the changes: git commit -m 'Remove LFS, exclude video files'" -ForegroundColor White
Write-Host "2. Push to GitHub: git push origin main" -ForegroundColor White
Write-Host "`nNote: The video file will remain on your local machine but won't be uploaded to GitHub." -ForegroundColor Cyan

