import app from './src/app';
import loger from 'libs/helpers/winston.helper';
import { SERVER_PORT } from 'libs/config/config';

app.listen(SERVER_PORT, () => {
  loger.info(`Server running on port ${SERVER_PORT}`)
});