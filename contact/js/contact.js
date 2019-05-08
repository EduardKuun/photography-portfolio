//Creates a custom greeting based on the time of day
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18) {
    greeting = 'Good evening!';
} else if (hourNow >= 12) {
    greeting = 'Good afternoon!';
} else if (hourNow >= 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Hi there!';
}
document.getElementById('time-of-day').textContent = greeting;

//Determines the year to place at footer after copyright symbol
var year = today.getFullYear();
var copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = year;
