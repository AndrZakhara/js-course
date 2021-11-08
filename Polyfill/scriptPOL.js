// polyfill  map, copy MDN
if (!Array.prototype.map) {

    Array.prototype.map = function (callback, thisArg) {

        let T, A, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        let Obj = Object(this);
        let len = Obj.length >>> 0;

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        if (arguments.length > 1) {
            T = thisArg;
        }
        A = new Array(len);

        k = 0;

        while (k < len) {
            let kValue,
                mappedValue;
            if (k in Obj) {

                kValue = Obj[k];
                mappedValue = callback.call(T, kValue, k, Obj);

                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}
