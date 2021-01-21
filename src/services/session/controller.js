import jwt from 'jsonwebtoken';
import { configAuth } from '@config'
import { UserApi } from '@models';


export async function store(req, res) {
  const { email, password } = req.body;
  const user = await UserApi.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ err: 'User not found' })
  }

  if (!(await UserApi.checkPassword(password, user.password))) {
    return res.status(401).json({ err: 'Password does not match' })
  }

  const { id, name } = user;

  res.json(
    {
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, configAuth.secret, {
        expiresIn: configAuth.expiresIn,
      })
    });
} 