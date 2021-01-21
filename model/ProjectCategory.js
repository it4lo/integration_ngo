import Sequelize from 'sequelize';
import connection from '../database/connection';
import BudgetCategory from '../model/BudgetCategory';


const ProjectCategory = connection.define('projeto_rubrica', {
  id: {
    primaryKey: true,
    type: Sequelize.BIGINT,
    allowNull: false
  },
  projeto_id: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  rubricaorcamento_id: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
}, { freezeTableName: true });


ProjectCategory.belongsTo(BudgetCategory, { foreignKey: 'rubricaorcamento_id' });

ProjectCategory.sync({ force: false }).then(() => {
  console.log('project_category-acccess');
});

export default ProjectCategory;