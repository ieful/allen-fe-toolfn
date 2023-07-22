/**
 * Promise超时包装器，保证Promise肯定会被决议.(用于保证Promise没有决议造成的代码阻塞)
 * @param {promise} promise
 * @param {number} timeout 超时时间（单位：ms）默认1000 ms
 */

export function timeoutPromiseWrapper<T>(promise: Promise<T>, timeout?: number): Promise<T> {
    if(typeof timeout !== 'number') {
        timeout = 1000;
    }
    return new Promise<T>((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('timeout'));
        }, timeout);
        promise.then(data => {
            clearTimeout(timer);
            resolve(data);
        }).catch(err => {
            clearTimeout(timer);
            reject(err);
        })
    })
}