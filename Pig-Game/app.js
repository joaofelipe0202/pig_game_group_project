const total = document.querySelectorAll('.player-score');
const newGame = document.querySelector('.btn-new');
const roll = document.querySelector('.btn-roll');
const hold = document.querySelector('.btn-hold');
const round1 = document.getElementById('current-0');
const round2 = document.getElementById('current-1');
const diceImage = document.querySelectorAll('img');
const player1 = document.querySelector('.player-0-panel');
const player2 = document.querySelector('.player-1-panel');
let allDiceImage = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];
let score = 0;
let isActive = true;
let randomNumber = 0;
let winningScore = 100;
let finalTotal1 = 0;
let finalTotal2 = 0;
let rollNumber = 0;

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

newGame.addEventListener('click', function () {
  total[0].textContent = "0";
  total[1].textContent = "0";
  round1.textContent = "0";
  round2.textContent = "0";
  player1.classList.add('active');
  player2.classList.remove('active');
  score = 0;
  isActive = true;
  randomNumber = 0;
  winningScore = 100;
  finalTotal = 0;
  finalTotal1 = 0;
  finalTotal2 = 0;

});

roll.addEventListener('click', function () {

  if (isActive) {
    let randomInt1 = getRandomInt(0, 5);
    let randomInt2 = getRandomInt(0, 5);

    diceImage[0].src = allDiceImage[randomInt1];
    diceImage[1].src = allDiceImage[randomInt2];

    rollNumber = (randomInt1 + 1) + (randomInt2 + 1);
    // console.log(rollNumber);

    if (randomInt1 === 0 || randomInt2 === 0) {
      alert("You roll 1!");
      round1.textContent = '0'
      round2.textContent = '0'
      rollNumber = 0;
      score = 0;
      activePlayer();
    } else {
      score += rollNumber;
      if (randomNumber === 0) {
        round1.textContent = score;
      } else if (randomNumber === 1) {
        round2.textContent = score;
      }
    }
  }
});

hold.addEventListener('click', function () {
  if (isActive) {

    if (randomNumber === 0) {
      finalTotal1 += score;
      total[randomNumber].textContent = finalTotal1;
    } else {
      finalTotal2 += score;
      total[randomNumber].textContent = finalTotal2;
    }

    console.log(score);
    console.log(finalTotal);

    if (finalTotal >= 100) {
      player1.classList.remove('active');
      player2.classList.add('active');
      isActive = false;
    }

    if (total[0].textContent >= 100) {
      alert("Player-1 Wins!");
    } else if (total[1].textContent >= 100) {
      alert("Player-2 Wins!");
    }
    score = 0;
    activePlayer();
  }
});


function activePlayer() {

  if (randomNumber === 0) {
    randomNumber = 1;
  } else {
    randomNumber = 0;
  }

  score = 0;

  round1.textContent = '0';
  round2.textContent = '0';

  player1.classList.toggle('active');
  player2.classList.toggle('active');
}