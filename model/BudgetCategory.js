import Sequelize from 'sequelize';
import connection from '../database/connection';
import Category from '../model/Category';

const BudgetCategory = connection.define('rubrica_orcamento', {
  id: {
    primaryKey: true,
    type: Sequelize.BIGINT,
    allowNull: false
  },
  rubrica_id: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
}, { freezeTableName: true });

BudgetCategory.belongsTo(Category, { foreignKey: 'rubrica_id' });
Category.hasMany(BudgetCategory);

BudgetCategory.sync({ force: false }).then(() => {
  console.log('budget_category-acccess');
});

export default BudgetCategory;