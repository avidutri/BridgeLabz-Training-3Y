
// Store one month's expenses for the five required categories.
const expenses = [
    { category: "Food", amount: 3000 },
    { category: "Travel", amount: 1000 },
    { category: "Rent", amount: 5000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 500 }
];

let totalExpenses = 0;

for (const expense of expenses) {
    totalExpenses += expense.amount;
}

const averageExpense = totalExpenses / expenses.length;
let finalAmount = totalExpenses;
finalAmount += totalExpenses * 0.10;

console.log(`Total expenses: Rs. ${totalExpenses.toFixed(2)}`);
console.log(`Average expense: Rs. ${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: Rs. ${finalAmount.toFixed(2)}`);
