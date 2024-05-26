'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function
const disPlayMessage = function (messge) {
  document.querySelector('.message').textContent = messge;
};
const disPlayScore = function (scoreRollUp) {
  document.querySelector('.score').textContent = scoreRollUp;
};
const disPlayNumber = function (numberRollUp) {
  document.querySelector('.number').textContent = numberRollUp;
};
const disPlayHighScore = function (highScoreRollUp) {
  document.querySelector('.highscore').textContent = highScoreRollUp;
};
const disPlaybodyBackground = function (bgColor) {
  document.querySelector('body').style.backgroundColor = bgColor;
};
const disPlayNumberValue = function (highScoreVelueRollUp) {
  document.querySelector('.number').value = highScoreVelueRollUp;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    disPlayMessage('No number!');
  } else if (guess === number) {
    disPlayMessage('Correct Number');
    disPlaybodyBackground('#fa8072');
    disPlayNumber(number);

    if (score > highscore) {
      highscore = score;
      disPlayHighScore(highscore);
    }
  } else if (guess !== number) {
    if (score > 1) {
      disPlayMessage(guess > number ? 'Too high' : 'Too low');
      score--;
      disPlayScore(score);
    } else {
      disPlayMessage('Yoo lost the game');
      disPlaybodyBackground('#631414');
      disPlayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  disPlayMessage('Start guessing..');
  disPlayScore(score);
  disPlayNumber('?');
  disPlayNumberValue('');
  disPlaybodyBackground('#222');
  document.querySelector('.guess').value = '';
});
