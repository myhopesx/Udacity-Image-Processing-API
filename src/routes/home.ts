import express from 'express';
import resizeApi from './resizeApi';

const router = express.Router();

router.use('/images', resizeApi);

export default router;
