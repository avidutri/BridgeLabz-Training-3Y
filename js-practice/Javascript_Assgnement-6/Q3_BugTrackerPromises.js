function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject(new Error("Bug tracker API request failed."));
                return;
            }

            resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
    })
    .catch(error => {
        console.error("Unable to load bugs:", error.message);
    });
