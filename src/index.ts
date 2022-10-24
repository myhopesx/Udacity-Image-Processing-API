import express from 'express';
import router from './routes/home';

const app = express();
const port = 3000;

app.use('/api', router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

export default {
  app
};
