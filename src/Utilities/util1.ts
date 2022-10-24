import express from 'express';
import sharp from 'sharp';
import fs from 'fs';

const resizeImage = (req: express.Request, res: express.Response): boolean => {
  const filename: string = req.params.image + '.jpg'.trim();
  const fullpath: string = `${req.params.width}_${req.params.height}_${filename}`;

  if (createThumbnailFolder() == false && checkCache(fullpath) == true) {
    res.sendFile(fullpath, { root: './images/thumbnails' });
  } else {
    sharp(`./images/${filename}`)
      .resize(Number(req.params.width), Number(req.params.height), {
        kernel: sharp.kernel.nearest,
        fit: 'contain',
        position: 'right top',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 }
      })
      .toFile(`./images/thumbnails/${fullpath}`)
      .then(() => {
        res.sendFile(fullpath, { root: './images/thumbnails' });
      })
      .catch((err) => {
        return false;
      });
  }
  return true;
};

function createThumbnailFolder(): boolean {
  let isCreated: boolean = false;
  if (!fs.existsSync('./images/thumbnails')) {
    fs.mkdirSync('./images/thumbnails');
    isCreated = true;
  }
  return isCreated;
}

function checkCache(filename: string): boolean {
  const files: string[] = fs.readdirSync('./images/thumbnails');
  const fileExists: boolean = files.includes(filename);
  return fileExists;
}

export default {
  resizeImage,
  checkCache,
  createThumbnailFolder
};
