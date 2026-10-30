function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// The returned function closes over and remembers `multiplier` after makeMultiplier returns.
