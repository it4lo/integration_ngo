import Sequelize from 'sequelize';
import connection from '../database/connection';
import ProjectCategory from '../model/ProjectCategory';
import BudgetCategory from '../model/BudgetCategory';
import Category from '../model/Category';

const Project = connection.define('projeto', {
  id: {
    primaryKey: true,
    type: Sequelize.BIGINT,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { freezeTableName: true });

ProjectCategory.belongsTo(Project);
Project.hasMany(ProjectCategory, { foreignKey: 'projeto_id' });


Project.sync({ force: false }).then(() => {
  console.log('project-acccess');
});

export default Project;