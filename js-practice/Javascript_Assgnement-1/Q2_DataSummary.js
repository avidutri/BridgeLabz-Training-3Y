// Create sample values for each required JavaScript data type.
const userName = "Binit";
const age = 25;
const isStudent = true;
const subjects = ["Math", "Science", "English"];
const student = { name: "Binit", age: 25 };
const address = null;
const optionalValue = undefined;

// Array.isArray distinguishes arrays from ordinary objects; null needs a special check.
const dataSummary = [
    { Label: "String", Value: userName, Type: typeof userName },
    { Label: "Number", Value: age, Type: typeof age },
    { Label: "Boolean", Value: isStudent, Type: typeof isStudent },
    { Label: "Array", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Object", Value: student, Type: typeof student },
    { Label: "Null", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Undefined", Value: optionalValue, Type: typeof optionalValue }
];

console.table(dataSummary);