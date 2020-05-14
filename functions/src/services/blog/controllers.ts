import { Request, Response } from 'express';
import database from '../../config/database';

export async function getAllBlog(req: Request, res: Response) {
  try {
    return database
      .ref('blog')
      .once('value')
      .then(function(snapshot) {
        const list: any[] = [];
        snapshot.forEach(function(childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          list.push({
            id: childKey,
            ...childData,
          });
        });
        res.status(200).json({ code: 200, data: list });
      });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getOneBlog(req: Request, res: Response) {
  try {
    const requestValue = req.params.id;

    return database
      .ref('blog')
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
