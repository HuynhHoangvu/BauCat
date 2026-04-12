import sharp from 'sharp'
import { copyFileSync } from 'fs'

// Backup original
copyFileSync('public/newlogo.png', 'public/newlogo_original.png')

const { data, info } = await sharp('public/newlogo.png')
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
  .toFile('public/newlogo.png')

console.log(`✅ Đã xóa nền logo (${width}×${height}px) → public/newlogo.png`)
console.log('📁 Bản gốc được lưu tại: public/newlogo_original.png')
