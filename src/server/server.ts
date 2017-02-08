import * as express from 'express';
const bodyParser = require('body-parser');
import { apiGetUserThreads } from './api/apiGetUserThreads';

const app: express.Application = express();

app.use(bodyParser.json());


apiGetUserThreads(app);

app.listen(8090, () => {
  console.log('Server is now running on port 8090 ...');
});


