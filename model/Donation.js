import Sequelize from 'sequelize';
import connection from '../database/connection';

//
//


const Donation = connection.define('orcamento', {
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


Donation.sync({ force: false }).then(() => {
  console.log('project-acccess');
});



export default Donation;