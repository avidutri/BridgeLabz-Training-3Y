
// Set a starting annual salary and a yearly increment percentage.
const currentSalary = 50000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const salaryProjection = [];

// Apply the annual increment for each of the next five years.
for (let year = 1; year <= 5; year++) {
    projectedSalary += projectedSalary * annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary * 100) / 100;
    salaryProjection.push({
        Year: year,
        Salary: `Rs. ${projectedSalary.toFixed(2)}`
    });
}

console.table(salaryProjection);