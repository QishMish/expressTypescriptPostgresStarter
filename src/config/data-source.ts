import "reflect-metadata"
import { DataSource } from "typeorm"


const { DB_HOST,DB_NAME, DB_USERNAME,DB_PASSWORD,DB_PORT} = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: false,
    logging: true,
    entities: [],
    migrations: [],
    subscribers: [],
})
