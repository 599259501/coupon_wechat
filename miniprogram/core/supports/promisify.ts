// TypeScript file
export const promisify = (api: any):any => {
    return (options:any=[], ...params: any[]) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, { success: resolve, fail: reject }), ...params);
        });
    }
}