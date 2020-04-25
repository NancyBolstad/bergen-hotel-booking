import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as express from 'express';
// import * as bodyParser from 'body-parser';

import getRootUrls from './utils/getRootUrls';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const start = functions.https.onRequest((request, response) => {
  response.send({
    message: 'Welcome to the Holidaze hotel booking API',
    versions: [
      {
        version: 1,
        link: `${getRootUrls(request)}/api/v1`,
      },
    ],
  });
});
