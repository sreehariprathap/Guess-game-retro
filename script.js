'use strict';
//defining a random number to be guessed

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);

// defininng functions to refactor repetitive code

const displayMessage = function (Message) {
  document.querySelector('.message').textContent = Message;
};

//defining score and highscore
let score = 20;
let highscore = document.querySelector('.highscore').textContent;

//defining guess function

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if no value is enterd
  if (!guess) {
    displayMessage('🤢 No number !');
  }
  // if guess is wrong then,
  else if (guess !== SecretNumber) {
    if (score <= 1) {
      displayMessage('⚠ You Lose !');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = 'X';
    } else {
      displayMessage(guess > SecretNumber ? '⚡ Too High' : '👀 Too Low ');
      score--;
      document.querySelector('.score').textContent = score;
    }
    //if guess is correct
  } else if (guess === SecretNumber) {
    displayMessage('❤ Congratulations, You won ! !');
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

// setting up reset button again

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(SecretNumber);
  displayMessage('Start guessing again...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
