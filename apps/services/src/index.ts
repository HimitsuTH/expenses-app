import express from "express";
import session from "express-session"

import redisHelper from 'libs/helpers/redis.helper'


const RedisStore = require('connect-reids')(session)



const app = express();
const port = 3001;

app.get("/", (_, res) => {
  res.send("Hello from services!");
});

app.listen(port, () => {
  console.log(`Service running at http://localhost:${port}`);
});