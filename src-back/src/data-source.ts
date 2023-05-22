import "reflect-metadata"

import { DataSource, DataSourceOptions } from "typeorm";
import { Url } from "./models/url.entity";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'shorturl',
    database: 'shorturl',
    entities: [Url,],
    migrations: ["build/migrations/*.js"],
    synchronize: true,
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource