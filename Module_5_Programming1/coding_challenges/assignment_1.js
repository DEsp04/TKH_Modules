//code pen link goes here -------> https://codepen.io/De0424/pen/vYLqmYO?editors=1111

//Step 1 Create prompts to capture the following and save them to variables:

let weeklyIncome = parseInt(prompt("Weekly Income"));

let foodCost = parseInt(prompt("Food Cost"));

let housingCost = parseInt(prompt("Housing Cost"));

let transportationCost = parseInt(prompt("Transportation Cost"));

let otherCost = parseInt(prompt("Other Cost"));

let annualSavingGoal = parseInt(prompt("How much you want to save in a year?"));

//Step 2: Next, we take how much they want to save in a year and divide it by 52 because we want to run a check to see if they make enough a week to save the amount they would need to reach their goal after a year.

//console.log(annualSavingGoal/52);

let weeklySavingGoal = (annualSavingGoal / 52).toFixed(2);

//Step 3: Next, we need to do some math:
//We need to add up all costs to a total weekly cost
//We need to subtract the total cost from their revenue.

let totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost;

let amountLeftOver = weeklyIncome - totalWeeklyCost;

//Step 4:

if(amountLeftOver > weeklySavingGoal) {
  console.log("You are on track");
} else {
  let needToSave = weeklySavingGoal - amountLeftOver;
  console.log("You need to save " + needToSave + " more a week.");
};
