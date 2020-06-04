import { Request, Response } from 'express';
import * as firebase from 'firebase';
import database from '../../config/database';
import { Contact } from './contact';

export async function getAllContact(req: Request, res: Response) {
  try {
    return database
      .ref('contact')
      .once('value')
      .then(function(snapshot) {
        const data: any[] = [];
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          data.push({
            id: childKey,
            ...childData,
          });
        });
        res.status(200).json({ code: 200, data: data });
      });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function createContact(req: Request, res: Response) {
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
          ...newContact,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        },
        error => {
          if (error) {
            throw error;
          }
        },
      )
      .then(doc => {
        res.status(200).json({ code: 200, message: `Created a new contact ${doc.key}` });
      });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function DeleteOneContact(req: Request, res: Response) {
  try {
    const requestValue = req.params.id;

    return database
      .ref('contact')
      .child(requestValue)
      .remove()
      .then(function() {
        res.status(200).json({
          code: 200,
          message: 'Remove succeeded.',
        });
      });
  } catch (error) {
    res.status(500).send(error);
  }
}
