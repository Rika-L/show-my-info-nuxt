export interface userLoginRes {
    code: number,
    error: string,
    data: {
        token: string
    }
}
