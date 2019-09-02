//Select the bar-chart
const barChart = document.querySelectorAll("#bar-chart");

//modify the height of a single bar
barChart[2].style.height = "60px";

// create a variab. cu change the height ????

//Create an array with 40 random values
let customers = [
  "5",
  "40",
  "20",
  "17",
  "32",
  "21",
  "55",
  "10",
  "42",
  "50",
  "1",
  "19",
  "25",
  "66",
  "31",
  "7",
  "10",
  "60",
  "40",
  "20",
  "17",
  "32",
  "21",
  "55",
  "10",
  "42",
  "50",
  "1",
  "19",
  "25",
  "66",
  "31",
  "7",
  "29",
  "48",
  "25",
  "37",
  "58",
  "69",
  "3"
];
console.log(customers);

// // random numbers for customers
// function getNumberOfCustomers() {
//   //Fake: gives a random number of customers
//   return Math.floor(Math.random() * 36);
// }
// console.log(getNumberOfCustomers);

// const queueSize = getNumberOfCustomers();
// // //To do: Append queueSize to the very right of the bar-chart
