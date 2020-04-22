'strict mode';

const serveStatic = require('serve-static');
const express = require('express');
const path = require('path');
const cors = require('cors');
const establishments = require('../data/establishments.json');
const enquires = require('../data/enquires.json');
const contact = require('../data/contact.json');
var methodOverride = require('method-override');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8001;
const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

app.use('/', serveStatic(path.resolve(__dirname, '../../dist')));

app
  .route('/api/v1/establishments')
  .get(function (_, res) {
    try {
      res.json({ code: 200, ...establishments });
    } catch (error) {
      if ('response' in error) {
        res.json(error.response.body);
      } else res.json(error);
    }
  })
  .post(function (_, res) {
    try {
      res.send('Add an establishment');
    } catch (error) {
      if ('response' in error) {
        res.json(error.response.body);
      } else res.json(error);
    }
  });

app.get('/api/v1/establishments/:id', function (req, res, _) {
  try {
    const requestValue = req.params.id;

    const toFind = establishments.find((establishment) => {
      return establishment.id === requestValue;
    });

    if (toFind) {
      res.json(toFind);
    } else {
      res.status(404).json('Not found');
    }
  } catch (error) {
    if ('response' in error) {
      res.json(error.response.body);
    } else {
      res.json(error);
    }
  }
});

app.get('/api/v1/enquiries', function (_, res, _) {
  try {
    res.json({ code: 200, ...enquires });
  } catch (error) {
    if ('response' in error) {
      res.json(error.response.body);
    } else res.json(error);
  }
});

app.get('/api/v1/contact', function (_, res, _) {
  try {
    res.json({ code: 200, ...contact });
  } catch (error) {
    if ('response' in error) {
      res.json(error.response.body);
    } else res.json(error);
  }
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`🚀Server listening on port http://localhost:${port}`);
});
