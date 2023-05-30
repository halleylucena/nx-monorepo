const Defer = function () {
    const result = {
        promise: null as any,
        resolve: null as any,
        reject: null as any,
    };

    result.promise = new Promise(function (resolve, reject) {
        result.resolve = function (value: any) {
            resolve(value);
        };

        result.reject = function (value: any) {
            reject(value);
        };
    });

    return result;
};

export default Defer;
