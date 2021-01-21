import { QueryTypes } from 'sequelize';
import connection, { sqlManagements } from '@database/connection';

export async function index(req, res) {
  const managements = await connection.query(sqlManagements, { type: QueryTypes.SELECT })
  res.json(managements);
}