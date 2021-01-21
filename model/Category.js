import Sequelize from 'sequelize';
import connection from '../database/connection';

const Category = connection.define('rubrica', {
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

Category.sync({ force: false }).then(() => {
  console.log('category-acccess');
});

export default Category;