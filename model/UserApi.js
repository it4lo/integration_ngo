import Sequelize from 'sequelize';
import connection from '../database/connection';
import bcrypt from 'bcryptjs';

const UserApi = connection.define('user_api', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.BIGINT,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    freezeTableName: true,
    hooks: {
      beforeSave: async function (user, option) {
        user.password = await bcrypt.hash(user.password, 8);
      }
    },

  });


UserApi.sync({ force: false }).then(() => {
  console.log('user_api-acccess');
});

UserApi.checkPassword = (reqPassword, userPassword) => {
    return bcrypt.compare(reqPassword, userPassword);
}

export default UserApi;