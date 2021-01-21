import { QueryTypes } from 'sequelize';
import connection, { sqlExpenses } from '@database/connection';

export async function index(req, res) {
  const expenses = await connection.query(sqlExpenses, { type: QueryTypes.SELECT })
  res.json(expenses);
}
