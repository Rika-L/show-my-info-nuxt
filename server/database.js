import mysql from 'mysql2'

export const db = mysql.createPool({
    host: '47.115.210.248',
    user: 'gpt1',
    password: 'zhang12345',
    database: 'gpt1'
})
