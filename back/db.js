import pg from 'pg'
const { Pool } = pg
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testeiuptec',
    password: 'postgres',
    port: 5432
})