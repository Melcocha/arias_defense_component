Add-Type -AssemblyName System.Drawing
$srcPath = Join-Path $PSScriptRoot "..\public\logoimagen.png"
$pubPath = Join-Path $PSScriptRoot "..\public"

$src = [System.Drawing.Bitmap]::FromFile((Resolve-Path $srcPath))

function Resize-Image($bmp, $w, $h, $dest) {
    $target = New-Object System.Drawing.Bitmap $w, $h
    $g = [System.Drawing.Graphics]::FromImage($target)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($bmp, 0, 0, $w, $h)
    $g.Dispose()
    $target.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    $target.Dispose()
}

Resize-Image $src 192 192 (Join-Path $pubPath "logo192.png")
Resize-Image $src 512 512 (Join-Path $pubPath "logo512.png")
Resize-Image $src 32 32 (Join-Path $pubPath "favicon-32x32.png")
Resize-Image $src 48 48 (Join-Path $pubPath "favicon-48x48.png")

# Save as .ico
$icoBmp = New-Object System.Drawing.Bitmap 48, 48
$g = [System.Drawing.Graphics]::FromImage($icoBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, 0, 0, 48, 48)
$g.Dispose()
$hIcon = $icoBmp.GetHicon()
$ico = [System.Drawing.Icon]::FromHandle($hIcon)
$icoPath = Join-Path $pubPath "favicon.ico"
$fs = New-Object System.IO.FileStream $icoPath, ([System.IO.FileMode]::Create)
$ico.Save($fs)
$fs.Close()
$ico.Dispose()
$icoBmp.Dispose()
$src.Dispose()

Write-Output "SUCCESS"
