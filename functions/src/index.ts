import * as functions from 'firebase-functions';
import * as firebase from 'firebase';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const api = functions.https.onRequest(app);

const config = {
  apiKey: 'AIzaSyBEqQ8JXTaRWlPxmZ-yFmu8-gUj2UCQP2k',
  authDomain: 'holidaze-service.firebaseapp.com',
  databaseURL: 'https://holidaze-service.firebaseio.com',
  projectId: 'holidaze-service',
  storageBucket: 'holidaze-service.appspot.com',
  messagingSenderId: '957594338325',
  appId: '1:957594338325:web:388025c77f62b70bbf7a1c',
  measurementId: 'G-6PBETGE2D7',
};

firebase.initializeApp(config);
const database = firebase.database();

app.get('/contact', async (req, res) => {
  try {
    return database
      .ref('contact')
      .once('value')
      .then(function (snapshot) {
        res.status(200).json({ contact: snapshot.val() });
      });
  } catch (error) {
    res.status(500).send(error);
  }
});
