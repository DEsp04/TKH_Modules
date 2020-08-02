//creating a game function with all the functions inside of it to make the page interactive
const game = () => {
  let pScore = 0; //player's score
  let cScore = 0; //computer's score

  const startGame = () => { //This function will fade out (disappeared) <div class="intro"> and fade in (show) <div class="match">
     const playBtn = document.querySelector(".intro button"); //assigning let's play button to playbtn constant variable
     const introScreen = document.querySelector(".intro"); //assigning <div class="intro"> to this variable
     const match = document.querySelector(".match"); //assigning <div class="match"> to this variable

     playBtn.addEventListener("click", () => { //when play button is clicked, this function will be trigger
       introScreen.classList.add("fadeOut");
       match.classList.add("fadeIn");
     });
  }

  const playMatch = () => { //Player will pick one of the three options (rock, paper, or scissors)
    const options = document.querySelectorAll(".options button"); //We are assigning all of the buttons in <div class=options> to const options varible
    const playerHand = document.querySelector(".player-hand"); //assigning image on the player side to this variable
    const computerHand = document.querySelector(".computer-hand"); //assigning image on the computer side to this variable
    const hands = document.querySelectorAll(".hands img"); //we are getting both computer and player hand images


    //We going to grab the hand images and listen to when the hands stop moving up and down
    hands.forEach(hand => {
      hand.addEventListener("animationend", function(){
        this.style.animation = ''; //'this' refers to each hand. When the hand stops moving, this function will be trigger and will add to both the player and computer hand images element a style with the css rule of animation = '' which will remove the animation.
      })
    });




    //We need computer to randomly pick an option (rock, paper, scissors)
    const computerOptions = ["rock", "paper", "scissors"];


    options.forEach(option => { //We are going to iterate on the array of options
      option.addEventListener("click", function() { //listen to each button(option) for when the user click one of the three options it will trigger this funciton. This function will cause the computer to randomly pick a it option from the computerOptions arrray. Also, We need the function because we will be using 'this'
        //console.log(this); //'this' represents the <button> element that we click of the three option given to the user

        //computer will pick a choice randomly
        const computerNumber = Math.floor(Math.random() * 3);
        //console.log(computerNumber); //Generate number between 0, 1, and 2
        const computerChoice = computerOptions[computerNumber];
        //console.log(computerChoice);

        setTimeout(() => { //we are delaying the comparison between the computer and player option (compareHands()) and the changes of hand images for 2 seconds.
          //We are going to call compareHands()
          compareHands(this.textContent, computerChoice); //this.textContent is the player choice from click one of the three <button>(rock/paper/scissors)</button> and the computer randomly choice

          //Updating images
          playerHand.src = `images/${this.textContent}.png`; //We are getting the <img> element for the player and changing the src attribute with the image in the images folder that pertains to the text content of the button user clicked.
          computerHand.src = `images/${computerChoice}.png`; //We are getting the <img> element for the computer and changing the src attribute with the image in the images folder that pertains to the option the computer chose randomly.

        }, 2000);


        //Adding 2 seconds animations to both computer and player hands
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";

      });
    });
  };

  //Creating a function to update the score board
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p"); //getting the p element nested in <div class="player-score">
    const computerScore = document.querySelector(".computer-score p"); //getting the p element nested in <div class="computer-score">

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => { //this function will tell user who is winnning, and who is getting the score
    const winner = document.querySelector(".winner") //We are getting the <h2 class="winner"> element and assigning it this variable

    //Checks for tie
    if(playerChoice === computerChoice){
      winner.textContent =  "It is a tie"; //The nest in <h2 class="winner"> we are adding this text if both player and computer option are the same
      return; //will end the compareHands function if this 'if' statement turn out true
    }

    //Checks for rock
    if(playerChoice === "rock"){
      if(computerChoice === "paper"){
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      }
    }

    //Checks for paper
    if(playerChoice === "paper"){
      if(computerChoice === "scissors"){
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    //Checks for scissors
    if(playerChoice === "scissors"){
      if(computerChoice === "paper"){
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  }

  //This will call or execute all of the inner functions (ex- startGame) in function game(){....} scope
  startGame();
  playMatch();
}

  //In this scope, we will call function game(){...} so that it can be executed and the game can start
  game();
