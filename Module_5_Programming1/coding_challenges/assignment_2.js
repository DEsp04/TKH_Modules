//code pen link goes here -------> https://codepen.io/De0424/pen/gOPNWbM?editors=1111



//Step 1: Lets prompt the grade level given to the user

let grade = parseInt(prompt("What is your grade"));

//Step 2: Passing the grade input to marks variable.
let marks = grade;

//Step 3: if/else statments to find out the letter head of the marks.

if(marks > 95){
  console.log("+A");
} else if (marks > 88 && marks <= 90) {
  console.log("A");
} else if (marks > 84 && marks <= 88) {
  console.log("B+");
} else if (marks > 76 && marks <= 84) {
  console.log("C+");
} else if (marks > 70 && marks <= 76) {
  console.log("C");
} else if (marks > 67 && marks <= 70) {
  console.log("D+");
} else if (marks > 64 && marks <= 67) {
  console.log("D");
} else {
  console.log("F");
}
