import UserApi from '@models/UserApi';

export async function store(req, res) {
  const user = await UserApi.create(req.body);
  res.json(user);
}