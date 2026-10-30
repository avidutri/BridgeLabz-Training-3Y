function runCallbackStage(stageName, callback) {
    setTimeout(() => {
        console.log(stageName);
        callback();
    }, 1000);
}

function runCallbackPipeline() {
    console.log("Callback pipeline:");

    // Nested callbacks show how each dependent stage increases indentation.
    runCallbackStage("Design", () => {
        runCallbackStage("Build", () => {
            runCallbackStage("Test", () => {
                runCallbackStage("Deploy", () => {
                    runCallbackStage("Celebrate", () => {
                        console.log("Callback pipeline complete");
                        runAsyncPipeline();
                    });
                });
            });
        });
    });
}

function runAsyncStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Async/await pipeline:");
    await runAsyncStage("Design");
    await runAsyncStage("Build");
    await runAsyncStage("Test");
    await runAsyncStage("Deploy");
    await runAsyncStage("Celebrate");
    console.log("Async/await pipeline complete");
}

// Async/await keeps dependent steps in a readable, top-to-bottom sequence.
runCallbackPipeline();
