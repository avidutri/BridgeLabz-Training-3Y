function waitForStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1001);

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed.`));
                return;
            }

            console.log(stepName);
            resolve();
        }, delay);
    });
}

function boilWater() {
    return waitForStep("Water boiled");
}

function brewCoffee() {
    return waitForStep("Coffee brewed");
}

function pourCoffee() {
    return waitForStep("Coffee poured into a cup");
}

boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process failed:", error.message));
