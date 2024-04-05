// 在需要连接数据库的文件中导入 MySQL 客户端库
import {ssql} from "~/server/sql";

export default defineEventHandler(async (event) => {
    if (event.method === 'GET') {
        const sql = "SELECT id, title, DATE_FORMAT(time, '%Y-%m-%d %H:%i:%s') AS formatted_time, introduce FROM blog;\n";
        try {
            // 执行 SQL 查询
            const result = await ssql(sql)
            // 返回结果
            return {
                code: 200,
                body: result
            };
        } catch (error) {
            console.error("数据库查询出错:", error);
            // 返回错误信息
            return {
                code: 500,
                body: "Internal Server Error"
            };
        }
    }
    if (event.method === 'POST') {
        const body = await readBody(event)
        const sql = 'INSERT INTO blog (title, time, introduce) VALUES (?, ?, ?)';
        try {
            await ssql(sql, [body.title, body.time, body.introduce])
            return {
                code: 200,
            };
        } catch (error) {
            console.error("数据库查询出错:", error);
            // 返回错误信息
            return {
                code: 500,
                body: error
            };
        }
    }
    if (event.method === 'PATCH') {
        const query = getQuery(event)
        const id = query.id
        const body = await readBody(event)
        const sql = 'UPDATE blog SET title = ?, time = ?, introduce = ? WHERE id = ?';
        try {
            await ssql(sql, [body.title, body.time, body.introduce, id])
            return {
                code: 200,
            };
        } catch (error) {
            return {
                code: 500,
                body: error
            };
        }
    }
    if (event.method === 'DELETE') {
        const query = getQuery(event)
        const id = query.id
        const sql = 'DELETE FROM blog WHERE id = ?'
        try {
            await ssql(sql, [id]);
            return {
                code: 200,
            };
        } catch (error) {
            console.error("数据库查询出错:", error);
            // 返回错误信息
            return {
                code: 500,
                body: error
            };
        }
    }


})
