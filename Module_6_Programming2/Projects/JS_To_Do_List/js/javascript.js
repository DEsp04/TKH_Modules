let myNodelist = document.getElementsByTagName("li");

for(let i = 0; i < myNodelist.length; i++){
  let span = document.createElement("span"); //creates <span> element
  let txt = document.createTextNode("\u00D7"); //creates the string x or "x"

  span.className = "close";//add class attribute to new <span> element
  span.appendChild(txt); //add the "x" to span element.

  myNodelist[i].appendChild(span); //iterating all <li> elements and adding to them the <span class="close">x</span>
}

let close = document.getElementsByClassName("close");

for(let i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    let div = this.parentElement; //we are going to grab the parent element (li) of the <span class="close">x</span> we just clicked, and assign it to the div variable.
    div.style.display = "none"; //we adding the parent the style attribute with the css rule of display none. This will cause the li to disappear.
  }
}

let list = document.querySelector("ul");
list.addEventListener('click', e => e.target.tagName === 'LI' ? e.target.classList.toggle('checked') : false); //The e (event) tell us the where in the ul we clicked on. What ever li was clicked, class = 'checked' is add or taken away from that li element.

function newElement () {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value; //the value of what the user types on the input box.
  let textValue = document.createTextNode(inputValue); //value will be added into text form.
  li.appendChild(textValue); //the value now as text will be added inside the newly created <li> element.

  if(inputValue === ''){
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = ""; //We are adding the value attribute to the <inpute> element on line 11 and setting it to empty string.

  //Adding the x again to the newly li element
  let span = document.createElement("span");
  let txt =  document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  //iterate on any of the newly <span class="close"> element or elements and add onclick attribute with the function that removes the parent element (<li>) if x is clicked.
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      let div = this.parentElement; //'this' refers to the <span class="close">x</span> element that we just clicked, and the .parentElement property directs you to its <li> parent.
      div.style.display = "none";
    }
  }
}

function removeAll() {
  let ulElement = document.getElementsByTagName("ul");
  ulElement[0].innerHTML = ""; //all the li elements nested in the ul element will be replace with empty string.
}
