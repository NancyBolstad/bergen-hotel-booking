import { Request } from 'express';

function getRootUrls(req: Request): string {
  return `${req.protocol}://${req.get('host')}`;
}

export default getRootUrls;
