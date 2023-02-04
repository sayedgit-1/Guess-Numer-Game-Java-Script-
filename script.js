'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🙌 Correct Number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value); // shows empty
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.highscore').textContent = 'bnsdcb';

*/

let score = 20;
let highscore = 0;
let secrateNumber = Math.trunc(Math.random() * 20 + 1); // trunc returns a integer value

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

//clicking the check button functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //🦋 Gussing the number and outputing them

  // when there is no no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number';
    displayMessage('❌ No number');
  }
  // when Player wins
  else if (guess === secrateNumber) {
    document.querySelector('.number').textContent = secrateNumber;
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // setting the high score if player wins
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secrateNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secrateNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secrateNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '⛔ You Lost the Game';
      displayMessage('⛔ You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when the score is high
  // else if (guess > secrateNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '⛔ You Lost the Game';
  //   }
  // }
  // // when score is low
  // else if (guess < secrateNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '⛔ You Lost the Game';
  //   }
  // }
});

// Again button click functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrateNumber = Math.trunc(Math.random() * 20 + 1);

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
