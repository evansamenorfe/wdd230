const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


//const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };//
let currentDate = `${day}-${month}-${year}`;


document.getElementById('currentdate').textContent = currentDate;


