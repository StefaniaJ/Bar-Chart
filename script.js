// function getNumberOfCustomers(){
//     //Fake: gives a random number of customers
//     return Math.floor(Math.random()*36);
// }

// const queueSize = getNumberOfCustomers();
// //To do: Append queueSize to the very right of the bar-chart

//Select the bar-chart
const barChart = document.querySelectorAll("#bar-chart");

//modify the height of a single bar
barChart[2].style.height = "60px";
