import { Request, Response } from 'express';
import * as firebase from 'firebase';
import database from '../../config/database';
import { Enquiry } from './enquiry';

export async function getAllEnquiries(req: Request, res: Response) {
  try {
    return database
      .ref('enquiries')
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

export async function createEnquiry(req: Request, res: Response) {
  try {
    const newEnquiry: Enquiry = {
      name: req.body['name'],
      email: req.body['email'],
      establishmentId: req.body['establishmentId'],
      checkIn: req.body['checkIn'],
      checkOut: req.body['checkOut'],
    };

    return database
      .ref('enquiries')
      .push(
        {
          ...newEnquiry,
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

export async function getOneEnquiry(req: Request, res: Response) {
  try {
    const requestValue = req.params.id;

    return database
      .ref('enquiries')
      .child(requestValue)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          res.status(200).json({
            code: 200,
            data: {
              id: snapshot.key,
              ...snapshot.val(),
            },
          });
        } else {
          res.status(404).send('Not found');
        }
      });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function DeleteOneEnquiry(req: Request, res: Response) {
  try {
    const requestValue = req.params.id;

    return database
      .ref('enquiries')
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
