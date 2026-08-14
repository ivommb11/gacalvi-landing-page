import { readdir, rename, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import sharp from 'sharp'

const PHOTOS_DIR = resolve('src/assets/photos')
const QUALITY = 82

const targets = [
  { match: /^hero-bg\./, maxWidth: 1920 },
  { match: /^sobre-nosotros-bg\./, maxWidth: 1700 },
  { match: /^mencion-\d+\./, maxWidth: 640 },
  { match: /^testimonios-bg\./, maxWidth: 1700 },
]

const files = await readdir(PHOTOS_DIR)

for (const file of files) {
  if (!/\.(png|jpg|jpeg|webp)$/i.test(file)) continue
  const rule = targets.find((t) => t.match.test(file))
  if (!rule) continue

  const input = resolve(PHOTOS_DIR, file)
  const output = resolve(PHOTOS_DIR, file.replace(/\.[^.]+$/, '.webp'))

  const image = sharp(input)
  const meta = await image.metadata()

  if (meta.width && meta.width > rule.maxWidth) {
    image.resize({ width: rule.maxWidth, withoutEnlargement: true })
  }

  await image.webp({ quality: QUALITY }).toFile(output)
  await rm(input)

  const out = await sharp(output).metadata()
  const mb = ((out.size ?? 0) / 1024 / 1024).toFixed(2)
  console.log(`optimized ${file} -> ${output.split(/[\\/]/).pop()} (${mb} MB, ${out.width}x${out.height})`)
}

console.log('done')
