import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import contact from './services/contact/route';
import getRootUrls from './utils/getRootUrls';

const app = express();
const routes = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const api = functions.https.onRequest(app);

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'Welcome to the holidaze API',
    api_status: 'experimental',
    versions: [
      {
        version: 1,
        link: `${getRootUrls(req)}/api/v1`,
        repository: 'https://github.com/NancyBolstad/bergen-hotel-booking',
      },
    ],
  });
});

app.use('/v1', routes);
routes.use('/contact', contact);
