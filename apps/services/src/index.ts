import express from 'express';

const app = express();

const session = require('express-session');
const RedisStore = require('connect-redis')(session);
import redisHelper from 'libs/helpers/redis.helper'

app.use(session({
  store: new RedisStore({ client: redisHelper }),
  secret: 'your secret',
  resave: false,
  saveUninitialized: false,
}));


app.get('/', (req, res) => {

});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
