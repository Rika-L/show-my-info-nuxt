import {db} from "~/server/database";

export  const ssql = async (sql:string) => {
    return await new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            console.log(result);
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    })
}
