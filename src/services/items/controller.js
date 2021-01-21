import { QueryTypes } from 'sequelize';
import connection, { sqlItems } from '@database/connection';

export async function index(req, res) {
  const items = await connection.query(sqlItems , { type: QueryTypes.SELECT })
  res.json(items);
}