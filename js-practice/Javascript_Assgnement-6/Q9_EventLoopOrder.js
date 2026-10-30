// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Synchronous statements finish first. Promise handlers enter the microtask
// queue, which is drained before the event loop runs the setTimeout macrotask.
