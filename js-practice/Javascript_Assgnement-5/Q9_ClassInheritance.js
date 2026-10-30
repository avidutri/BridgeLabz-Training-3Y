// Prototype-based version from Q5.
function PrototypePerson(name) {
    this.name = name;
}

PrototypePerson.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function PrototypeStudent(name, branch) {
    PrototypePerson.call(this, name);
    this.branch = branch;
}

PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;

PrototypeStudent.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

// ES6 class version: extends links the prototypes, and super initializes Person.
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

console.log("Prototype version:");
const prototypeStudent = new PrototypeStudent("Avid", "Computer Science");
prototypeStudent.showName();
prototypeStudent.showBranch();

console.log("Class version:");
const classStudent = new Student("Avid", "Computer Science");
classStudent.showName();
classStudent.showBranch();
