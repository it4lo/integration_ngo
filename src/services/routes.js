import { expenseRoutes } from './expenses';
import { budgetRoutes } from './budgets';
import { destinationRoutes } from './destinations';
import { managementRoutes } from './managements';
import { userRoutes } from './users';
import { itemsRoutes } from './items';
import { sessionRoutes } from './session';

export default async function (app) {

  app.use('/expenses', expenseRoutes);
  app.use('/budgets', budgetRoutes);
  app.use('/destinations', destinationRoutes);
  app.use('/managements', managementRoutes);
  app.use('/users', userRoutes);
  app.use('/items', itemsRoutes);
  app.use('/session', sessionRoutes);

  return app
}