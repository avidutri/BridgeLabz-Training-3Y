
// Set sample weather conditions and combine rain/cold-wind checks.
const temperature = 25;
const isRaining = false;
const windSpeed = 10;
const shouldStayIndoors = isRaining || (temperature < 15 && windSpeed > 20);

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (shouldStayIndoors) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}