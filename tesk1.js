// Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.
for (let counter = 0; counter <= 300; counter++) {
    console.log(counter);
  }
  
  let counter = 0;
  while (counter <= 300) {
    console.log(counter);
    counter++;
  }

// Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.
for (let counter = 0; counter <= 1000; counter = counter + 2) {
    console.log(counter);
  }
  

// Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.
let counter3 = 0;
let sum = 0;
while (counter3 <= 3000) {
  sum = sum + counter3;
  counter3++;
}
console.log(sum);
// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.
const numbers = [8, 500, 1000, 200000];
let sum4 = 0;
for (let counter = 0; counter < numbers.length; counter++) {
  sum4 = sum4 + numbers[counter];
}
console.log(sum4);