
// Enter marks for five subjects, each scored out of 100.
const subjectMarks = [85, 90, 78, 88, 80];
let totalMarks = 0;
let hasFailedSubject = false;

for (const marks of subjectMarks) {
    totalMarks += marks;
    if (marks < 35) {
        hasFailedSubject = true;
    }
}

const averageMarks = totalMarks / subjectMarks.length;
const overallPercentage = (totalMarks / (subjectMarks.length * 100)) * 100;

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);

// A failed subject overrides the overall percentage.
if (hasFailedSubject || overallPercentage < 50) {
    console.log("Detained");
} else if (overallPercentage >= 85) {
    console.log("Promoted with Distinction");
} else if (overallPercentage >= 50 && overallPercentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}