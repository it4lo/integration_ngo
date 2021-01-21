import { QueryTypes } from 'sequelize';
import connection, { sqlBudgets } from '@database/connection';

export async function index(req, res) {
  const budgets = await connection.query(sqlBudgets, { type: QueryTypes.SELECT })
  res.json(budgets);
}