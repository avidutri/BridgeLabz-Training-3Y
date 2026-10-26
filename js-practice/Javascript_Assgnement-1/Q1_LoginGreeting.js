// Use the current local hour to choose a greeting for the user.
const userName = "Binit";
const currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}