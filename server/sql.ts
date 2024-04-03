import { db } from "~/server/database";

export const ssql = async (sql: string, values?: any[]) => {
    return await new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};
