//code pen link goes here -------> https://codepen.io/De0424/pen/wvMLRxM?editors=1112


let quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "

//console.log(quote.split(" "));

let quoteArray = quote.split("");
let array = [];

for (let i = 0; i < quoteArray.length; i++) {
    array.push(quoteArray[i].replace(/s/gi, "$"));
};

let newString = array.join('');

console.log(newString);
