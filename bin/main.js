import app from '../src/app';
import connection from '@database/connection';
import router from '../src/services/routes';


(async function () {
  await connection.authenticate();
  router(app);
})();
