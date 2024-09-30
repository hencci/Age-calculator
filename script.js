const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");

const yearsElement = document.querySelector(".years");
const monthsElement = document.querySelector(".months");
const daysElement = document.querySelector(".days"); 


const calculateButton = document.getElementById("calculateButton"); 
const date = new Date();
let month = date.getMonth();
console.log(month);

function day() {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // Validation
  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
    alert("Please enter valid birth date values.");
    return;
  }

  
  const birthDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  // Calculate the age in milliseconds here
  const ageInMillis = currentDate - birthDate;

  // and Convert  milliseconds to years, months, and days
  const years = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor((ageInMillis % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  const days = Math.floor((ageInMillis % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

  yearsElement.textContent = years;
  monthsElement.textContent = months;
  daysElement.textContent = days;
}

calculateButton.addEventListener("click", day);