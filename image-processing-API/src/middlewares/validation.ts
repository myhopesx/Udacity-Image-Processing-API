import fs from 'fs';
import express from 'express';

function validateImage(req: express.Request, res: express.Response, next: express.NextFunction) {
  const width: number = Number(req.params.width);
  const height: number = Number(req.params.height);

  const files = fs.readdirSync('./images');
  const fileExists = files.includes(req.params.image + '.jpg');
  if (!fileExists) {
    res.status(404).send('<h3>Image not found</h3>');
  } else if (isNaN(width) || isNaN(height) || width < 1 || height < 1) {
    res.status(400).send('<h3> Width and height must be positive numbers</h3>');
  } else {
    next();
  }
}

export default { validateImage };
