// import functions and grab DOM elements

import { getRandomThrow, didUserWin } from './utils.js';

const throwButton = document.getElementById('throw-button');
const userWins = document.getElementById('wins');
const userLoses = document.getElementById('losses');
const userDraws = document.getElementById('draws');
const totalPlays = document.getElementById('total');
const gameResult = document.getElementById('game-result');

// initialize state

let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;

// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {
    total++;
    const randomNumber = Math.round(Math.random() * 2);

    getRandomThrow(randomNumber);

    const computerThrow = getRandomThrow(randomNumber);

    const selectedButton = document.querySelector('input[type="radio"]:checked');

    const userThrow = selectedButton.value;

    if (didUserWin(userThrow, computerThrow) === 'win') {
        wins++;
        gameResult.textContent = `${userThrow} beats ${computerThrow}.  You win!`;
    } else if (didUserWin(userThrow, computerThrow) === 'draw') {
        draw++;
        gameResult.textContent = `You have ${userThrow}. Computer has ${computerThrow}.  Draw!`;
    } else if (didUserWin(userThrow, computerThrow) === 'lose') {
        losses++;
        gameResult.textContent = `${computerThrow} beats ${userThrow}. You lose!`;
    }

    userWins.textContent = wins;
    userLoses.textContent = losses;
    userDraws.textContent = draws;
    totalPlays.textContent = total;
})