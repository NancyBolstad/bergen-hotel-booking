import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';

admin.initializeApp(functions.config().firebase);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const api = functions.https.onRequest(app);

const db = admin.firestore();
const userCollection = 'users';

interface User {
  firstName: String;
  lastName: String;
}

// Create new user
app.post('/users', async (req, res) => {
  try {
    const user: User = {
      firstName: req.body['firstName'],
      lastName: req.body['lastName'],
    };

    const newDoc = await db.collection(userCollection).add(user);

    console.log(newDoc);
    res.status(201).send(`Created a new user: ${newDoc.id}`);
  } catch (error) {
    res
      .status(400)
      .send(
        `User should cointain firstName, lastName, email, areaNumber, department, id and contactNumber!!!`,
      );
  }
});

app.get('/users', async (req, res) => {
  try {
    const userQuerySnapshot = await db.collection(userCollection).get();
    const users: any[] = [];
    userQuerySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
