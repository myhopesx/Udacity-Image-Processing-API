import express from 'express';
import util1 from '../Utilities/util1';
import validation from '../middlewares/validation';

const resizeApi = express.Router();

resizeApi.get('/:image/:width/:height', validation.validateImage, (req: express.Request, res: express.Response) => {
  util1.resizeImage(req, res);
});

export default resizeApi;
