import Sequelize from 'sequelize';
import connection from '../database/connection';
import ProjectCategory from '../model/ProjectCategory';

const Partner = connection.define('fonte_pagadora', {
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


Partner.sync({ force: false }).then(() => {
  console.log('fonte_pagadora-acccess');
});


export default Partner;