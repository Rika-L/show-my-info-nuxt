import mysql from 'mysql2'

export const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'gpt1',
    password: 'zhang12345',
    database: 'gpt1',
    port:'3306'
})
