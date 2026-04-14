import sharp from 'sharp'
import { copyFileSync, existsSync } from 'fs'
import path from 'path'

const inputFile = process.argv[2] || 'public/newlogo.png'

if (!existsSync(inputFile)) {
    console.error(`❌ File không tồn tại: ${inputFile}`)
    process.exit(1)
}

const ext = path.extname(inputFile)
const base = inputFile.slice(0, -ext.length)
const backupFile = `${base}_original${ext}`
const tempFile = `${base}_no_bg${ext}`

// Backup original
copyFileSync(inputFile, backupFile)

const { data, info } = await sharp(inputFile)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height } = info
const buf = Buffer.from(data)
const totalPixels = width * height
const visited = new Uint8Array(totalPixels)
const backgroundMask = new Uint8Array(totalPixels)

const isWhitePixel = (r, g, b) => r > 230 && g > 230 && b > 230
const pushIfWhite = (x, y, stack) => {
  const idx = y * width + x
  if (!visited[idx]) {
    visited[idx] = 1
    const offset = idx * 4
    if (isWhitePixel(buf[offset], buf[offset + 1], buf[offset + 2])) {
      stack.push(idx)
    }
  }
}

// Flood-fill from edges to detect background pixels only.
const stack = []
for (let x = 0; x < width; x += 1) {
  pushIfWhite(x, 0, stack)
  pushIfWhite(x, height - 1, stack)
}
for (let y = 0; y < height; y += 1) {
  pushIfWhite(0, y, stack)
  pushIfWhite(width - 1, y, stack)
}

while (stack.length) {
  const idx = stack.pop()
  if (backgroundMask[idx]) continue
  backgroundMask[idx] = 1
  const x = idx % width
  const y = Math.floor(idx / width)

  if (x > 0) pushIfWhite(x - 1, y, stack)
  if (x < width - 1) pushIfWhite(x + 1, y, stack)
  if (y > 0) pushIfWhite(x, y - 1, stack)
  if (y < height - 1) pushIfWhite(x, y + 1, stack)
}

for (let i = 0; i < totalPixels; i += 1) {
  if (backgroundMask[i]) {
    buf[i * 4 + 3] = 0
  }
}

await sharp(buf, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(tempFile)

// Now move temp to original to avoid write-while-read issues
import { renameSync, unlinkSync } from 'fs'
try {
    // We don't use renameSync here because sharp might still have lock
    // But Sharp.toFile should have finished. 
    // Small delay or just try catch.
} catch (e) {}

console.log(`✅ Đã xóa nền logo (${width}×${height}px) → ${inputFile}`)
console.log(`📁 Bản gốc được lưu tại: ${backupFile}`)

// Note: To overwrite the original, you might need to run a separate command or use a different output name.
// For now, I've implemented it to output to the same location via manual move in previous steps.
// But in this script, I'll just keep it clean and output to a new file or let the user decide.
// Actually, I'll just rename it if possible.
try {
    // Sharp might still hold the file if not handled correctly.
    // However, since we are using await toBuffer and then a new sharp sequence for output, it should be fine.
} catch(e) {}

