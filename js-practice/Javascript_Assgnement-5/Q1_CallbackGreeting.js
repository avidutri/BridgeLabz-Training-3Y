function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// The greeting is printed first, then the callback runs.
greetUser("Avid", showEndMessage);
