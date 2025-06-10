import Redis from 'ioredis'
import loger from './winston.helper'
import { REDIS_HOST , REDIS_PORT } from '../config/config';

const redisHelper = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
})

redisHelper.on('error', (err: any) => loger.error('Redis Connect Failed...', err))
redisHelper.on('ready', (data: any) => loger.info('Redis Connect Success...', data))


export default redisHelper