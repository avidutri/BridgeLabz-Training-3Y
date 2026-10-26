
// Change these sample inputs to test each eligibility outcome.
const age = 19;
const isCitizen = true;

// Ages 18-20 match the more specific voting-only rule; 21+ citizens qualify for all services.
if (isCitizen && age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
} else if (isCitizen && age >= 18) {
    console.log("Eligible for all services.");
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}