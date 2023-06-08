import {DataSource} from 'typeorm'
import {config} from 'dotenv'

config()
export const App = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: String(process.env.DB_PASS),
    database: process.env.DB_NAME,
    entities: [`${__dirname}/source/entities/*.{ts,js}`],
    migrations: [`${__dirname}/source/migrations/*.{ts,js}`]
})

