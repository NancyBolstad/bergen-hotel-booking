import { Request, Response } from 'express';
import * as firebase from 'firebase';
import database from '../../config/database';

export async function getAllEstablishments(req: Request, res: Response) {
  try {
    return database
      .ref('establishments')
      .once('value')
      .then(function(snapshot) {
        const establishments: any[] = [];
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          establishments.push({
            id: childKey,
            ...childData,
          });
        });
        res.status(200).json({ code: 200, data: establishments });
      });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getOneEstablishment(req: Request, res: Response) {
  try {
    const requestValue = req.params.id;

    return database
      .ref('establishments')
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

export async function createOneEstablishment(req: Request, res: Response) {
  try {
    return database
      .ref('establishments')
      .push(
        {
          ...req.body,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        },
        error => {
          if (error) {
            throw error;
          }
        },
      )
      .then(doc => {
        res.status(200).json({ code: 200, message: `Created a new establishment ${doc.key}` });
      });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function DeleteOneEstablishment(req: Request, res: Response) {
  try {
    const requestValue = req.params.id;

    return database
      .ref('establishments')
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
