import { QueryTypes } from 'sequelize';
import connection, { sqlDestinations } from '@database/connection';

export async function index(req, res) {
  const destinations = await connection.query(sqlDestinations, { type: QueryTypes.SELECT })
  res.json(destinations);
}