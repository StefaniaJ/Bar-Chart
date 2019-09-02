"use strict";

//Start
window.addEventListener("DOMContentLoaded", start);

function start() {
  //Create an array with 40 random values
  const arrayData = [
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
  console.log(arrayData);

  let getNumberOfCustomers;

  document.querySelectorAll(".barCh").forEach((barCh, i) => {
    barCh.style.height = arrayData[i] + "px";
  });

  setInterval(function() {
    getNumberOfCustomers = Math.floor(Math.random() * 36);
    arrayData.push(getNumberOfCustomers);
    console.log(arrayData);
    if (arrayData.length > 40) {
      arrayData.shift();
    }
    document.querySelectorAll(".barCh").forEach((barCh, i) => {
      barCh.style.height = arrayData[i] + "px";
    });
  }, 200);
}
