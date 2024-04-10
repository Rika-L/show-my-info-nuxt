// 登录
import {ssql} from "~/server/sql";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const username = body.username;
        const password = body.password;

        // 使用参数化查询，防止 SQL 注入攻击
        const sql = 'SELECT * FROM SHOW_user WHERE username = ?;';
        const result: any = await ssql(sql, [username]);

        // 检查是否有匹配的用户
        if (result.length === 0) {
            return {
                code: 201,
                error: '账户名或密码错误'
            };
        }

        // 验证密码
        if (result[0].password === password) {
            return {
                code: 200,
                data: {
                    token: result[0].token
                }
            };
        } else {
            return {
                code: 201,
                error: '账户名或密码错误'
            };
        }
    } catch (e) {
        return {
            code: 201,
            error: '账户名或密码错误'
        };
    }
});

