//code pen link goes here -------> https://codepen.io/De0424/pen/QWyXVqE?editors=0002



let full_name_arr = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

let array = []

let first_name = [];

let last_name = [];


for (let i = 0; i < full_name_arr.length; i++) {
  array.push(full_name_arr[i].split(" "));
  first_name.push(array[i][0]);
  last_name.push(array[i][1]);
}

console.log(first_name);

console.log(last_name);
