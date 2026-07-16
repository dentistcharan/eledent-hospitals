import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const pages = [
  "dental-generic",
  "dental-implant",
  "invisalign",
  "kompally-generic",
];

for (const page of pages) {
  const imagesDir = path.join("public", page, "images");
  const files = await fs.readdir(imagesDir);

  await Promise.all(
    files
      .filter((file) => /\.(?:png|jpe?g)$/i.test(file))
      .map(async (file) => {
        const source = path.join(imagesDir, file);
        const output = source.replace(/\.(?:png|jpe?g)$/i, ".webp");
        await sharp(source)
          .webp({ quality: 82, alphaQuality: 90, smartSubsample: true })
          .toFile(output);
      }),
  );
}
