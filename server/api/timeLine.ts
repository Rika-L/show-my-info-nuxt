// 在需要连接数据库的文件中导入 MySQL 客户端库
import {ssql} from "~/server/sql";

export default defineEventHandler(async (event) => {
    console.log(event.method);
    if (event.method === 'GET') {
        const sql: string = "SELECT id, DATE_FORMAT(time, '%Y-%m-%d') AS time, event FROM timeline ORDER BY time ASC;";
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
