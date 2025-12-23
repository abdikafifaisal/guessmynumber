'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

document.querySelector('.check1').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); // convert input to number

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess < number) {
        document.querySelector('.message').textContent = 'Too low!';
    } else if (guess > number) {
        document.querySelector('.message').textContent = 'Too high!';
    } else {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = 'green';
    }
});
