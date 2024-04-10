// 在需要连接数据库的文件中导入 MySQL 客户端库
import {ssql} from "~/server/sql";

export default defineEventHandler(async (event) => {
    if (event.method === 'POST') {
        const body = await readBody(event)
        const sql = 'INSERT INTO SHOW_timeline (time, event) VALUES (?, ?)';
        try {
            await ssql(sql, [body.time, body.event])
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
    if (event.method === 'DELETE') {
        const query = getQuery(event)
        const id = query.id
        const sql = 'DELETE FROM SHOW_timeline WHERE id = ?'
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
    if (event.method === 'PATCH') {
        const query = getQuery(event)
        const id = query.id
        const body = await readBody(event)
        const sql = 'UPDATE SHOW_timeline SET time = ?, event = ? WHERE id = ?';
        try {
            await ssql(sql, [body.time, body.event, id])
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
    if (event.method === 'GET') {
        const sql = "SELECT * FROM (\n" +
            "    SELECT id, DATE_FORMAT(time, '%Y-%m-%d') AS time, event \n" +
            "    FROM SHOW_timeline \n" +
            "    ORDER BY time DESC -- 按时间倒序排序，以获取最新的记录\n" +
            "    LIMIT 5 -- 限制结果集的大小为最新的五个记录\n" +
            ") AS recent_records\n" +
            "ORDER BY time ASC; -- 将最新的五个记录按时间从旧到新排序\n";
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
});
