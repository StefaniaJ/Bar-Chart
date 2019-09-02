//Select the bar-chart
const barChart = document.querySelectorAll("#bar-chart");

//modify the height of a single bar
// barChart[2].style.height = "60px";

// create a variab. cu change the height ????
// drawChart();
function drawChart{
    let max = Math.max.apply(Math, data);
}

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

//Create a function with a loop that reads the array, and modifies the height of each bar.
window.addEventListener("DOMContentLoaded", start);
let counter = customers[0];

function start() {
    //reset the counter
    counter = customers[0];
    
  setInterval(count, 500);
  //   count(); //call the function 
}

function count() {
    //implement counter
    counter++;

//insert counter into beginning of array
customers.push(counter);

 //limit the length of the array
  //if it is longer then 9 -remove the excess
  if (customers.length > 40) {
    customers.pop();
  }

  //display counter
  console.log(counter);

  //display array
  console.log(customers);



// // random numbers for customers
// function getNumberOfCustomers() {
//   //Fake: gives a random number of customers
//   return Math.floor(Math.random() * 36);
// }
// console.log(getNumberOfCustomers);

// const queueSize = getNumberOfCustomers();
// // //To do: Append queueSize to the very right of the bar


//https://codepen.io/tomesch/pen/itjqk/
//https://www.codewall.co.uk/best-free-javascript-bar-chart/