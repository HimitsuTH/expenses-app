import Redis from 'ioredis'

const REDIS_HOST = 'localhost'
const REDIS_PORT = 6379


const redisHelper = new Redis({
    host: REDIS_HOST,
    port: REDIS_PORT,
})

redisHelper.on('error', (err: any) => console.log('Redis connect failed.....'))
redisHelper.on('ready', (err: any) => console.log('Redis connect success.....'))


export default redisHelper