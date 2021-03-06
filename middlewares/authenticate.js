import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { configAuth } from '@config';

export default async function (req, res, next) {

  const { url } = req;

  //Verify white list, if exists return next route
  if (!await needValidate(url)) return next();


  const authHeader = req.headers.authorization;

  //Verify header of authorization
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json({ error: 'Token is not valid' });
  }

  try {

    const dedoced = await promisify(jwt.verify)(token, configAuth.secret);

    res.userId = dedoced.id;

    return next();

  } catch (error) {
    return res.json({ errr: 'Token is not valid' });
  }


  async function needValidate(url) {
    const whitelist = [
      '/session' // list of services 
    ]

    for (const wlUrl of whitelist) if (url.startsWith(wlUrl)) return false

    return true
  }

}