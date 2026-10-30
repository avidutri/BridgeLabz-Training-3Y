console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise callback");
});

console.log("Synchronous log");
console.log("End");

// After synchronous code ends, JavaScript drains the microtask queue before
// processing macrotasks such as setTimeout, so the Promise callback runs first.
