let car = {
  make: "Toyota",
  model: "Corolla",
  color: "navy blue",
  type: "coupe",
  wheel: "",
  get mod() {
    return this.model;
  },
  set whl (num) {
    this.wheel = num;
  },
  turnOnEngine: function(){
    console.log("vroom vroom");
  }
};

let team = {
  country: "US",
  state: "New York",
  city: "New York City",
  numberOfTeams: 11,
  nameOfTeam: "",
  get cty() {
    return this.city;
  },
  set name(nam) {
    this.nameOfTeam = nam;
  },
  shout: function(){
    console.log("Lets gooo")
  }
}

let animal = {
  class: "Mammalia",
  species: "Canis Iupus familiaris",
  legs: 4,
  tail: "yes",
  breed: "",
  get leg() {
    return this.legs;
  },
  set bred(brd) {
    this.breed = brd;
  },
  bark: function(){
    console.log("whoof whoof");
  }
}
