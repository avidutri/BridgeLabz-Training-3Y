const userWithArrowMethod = {
    name: "Avid",
    showName: () => console.log(this.name)
};

userWithArrowMethod.showName(); // Undefined in a Node.js module: the arrow inherits the outer `this`.
console.log("An arrow function does not get `this` from the object that calls it.");

const userWithNormalMethod = {
    name: "Avid",
    showName: function () {
        console.log(this.name);
    }
};

userWithNormalMethod.showName(); // The normal function's `this` is the user object.
