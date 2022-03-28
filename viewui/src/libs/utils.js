// 更新异步loading状态
export function updateLoading(promise, update) {
    if (!promise.then) return;
    update(true);
    promise.then(r => {
        update(false);
        return r;
    }, err => {
        update(false);
        return Promise.reject(err);
    });
}