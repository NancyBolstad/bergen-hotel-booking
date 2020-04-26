import * as functions from 'firebase-functions';
import * as firebase from 'firebase';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import config from './config/configDatabase';
import { Contact } from './types/contact';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const api = functions.https.onRequest(app);

firebase.initializeApp(config);
const database = firebase.database();

app
  .route('/contact')
  .get(async (req, res) => {
    try {
      return database
        .ref('contact')
        .once('value')
        .then(function (snapshot) {
          const data: any[] = [];

          snapshot.forEach(function (childSnapshot) {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            data.push({
              id: childKey,
              ...childData,
            });
          });

          res.status(200).json({ code: 200, contact: data });
        });
    } catch (error) {
      res.status(500).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      const newContact: Contact = {
        clientName: req.body['clientName'],
        email: req.body['email'],
        message: req.body['message'],
      };

      return database
        .ref('contact')
        .push(
          {
            newContact,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
          },
          (error) => {
            if (error) {
              throw error;
            }
          },
        )
        .then((doc) => {
          res.status(200).json({ code: 200, message: `Created a new contact ${doc.key}` });
        });
    } catch (error) {
      res.status(500).send(error);
    }
  });
