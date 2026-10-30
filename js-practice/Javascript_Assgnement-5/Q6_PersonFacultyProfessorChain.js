function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person: ${this.name}`);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.teach = function () {
    console.log(`Teaching: ${this.subject}`);
};

function Professor(name, subject, department) {
    Faculty.call(this, name, subject);
    this.department = department;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.research = function () {
    console.log(`Research department: ${this.department}`);
};

const professor = new Professor("Dr. Rao", "Computer Science", "Engineering");
professor.introduce();
professor.teach();
professor.research();
console.log("Professor inherits from Faculty:", professor instanceof Faculty);
console.log("Professor inherits from Person:", professor instanceof Person);
