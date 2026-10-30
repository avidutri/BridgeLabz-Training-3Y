Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("myMap must be called on an array.");
    }

    if (typeof callback !== "function") {
        throw new TypeError("myMap callback must be a function.");
    }

    const array = Object(this);
    const length = array.length >>> 0;
    const result = new Array(length);

    for (let index = 0; index < length; index++) {
        if (index in array) {
            result[index] = callback.call(thisArg, array[index], index, array);
        }
    }

    return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
