const failedModule = ["Profile", "Posts", "Messages"][Math.floor(Math.random() * 3)];

function loadProfile() {
    return loadModule("Profile", 2000, failedModule === "Profile");
}

function loadPosts() {
    return loadModule("Posts", 1500, failedModule === "Posts");
}

function loadMessages() {
    return loadModule("Messages", 1000, failedModule === "Messages");
}

function loadModule(moduleName, delay, shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`${moduleName} failed to load.`));
                return;
            }

            resolve(`${moduleName} Loaded`);
        }, delay);
    });
}

async function loadDashboard() {
    const startTime = Date.now();
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach((result, index) => {
        const moduleName = ["Profile", "Posts", "Messages"][index];

        if (result.status === "fulfilled") {
            console.log(`${moduleName} succeeded: ${result.value}`);
        } else {
            console.error(`${moduleName} failed: ${result.reason.message}`);
        }
    });

    console.log(`Total time: ${Date.now() - startTime} ms`);
}

loadDashboard();
