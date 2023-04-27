// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();


// //const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };//
// let currentDate = `${day}-${month}-${year}`;


// document.getElementById('currentdate').textContent = currentDate;


// document.querySelector("#currentyear").innerHTML = year;

//name of days array

var dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];


//name of months array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear;
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById('currentdate').textContent = currentdate;
document.querySelector("#currentyear").innerHTML = year;