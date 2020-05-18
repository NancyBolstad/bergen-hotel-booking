import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import contact from './services/contact/route';
import establishments from './services/establishments/route';
import blog from './services/blog/route';
import getRootUrls from './utils/getRootUrls';

const app = express();
const routes = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);
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
routes.use('/establishments', establishments);
routes.use('/blog', blog);
