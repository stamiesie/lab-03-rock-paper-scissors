import { getRandomThrow, didUserWin, setsScoreboard } from './utils.js';

const throwButton = document.getElementById('throw-button');
const resetButton = document.getElementById('reset-button');
const userWins = document.getElementById('wins');
const userLoses = document.getElementById('losses');
const userDraws = document.getElementById('draws');
const totalPlays = document.getElementById('total');
const gameResult = document.getElementById('game-result');
const gameResets = document.getElementById('resets');

// initialize state

let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;
let resets = 0;

// set event listeners to update state and DOM

throwButton.addEventListener('click', () => {
    total++;

    const randomNumber = Math.round(Math.random() * 2);
    const computerThrow = getRandomThrow(randomNumber);
    const selectedButton = document.querySelector('input[type="radio"]:checked');
    const userThrow = selectedButton.value;

    if (didUserWin(userThrow, computerThrow) === 'win') {
        wins++;
        gameResult.textContent = `${userThrow} beats ${computerThrow}.  You win!`;
    } else if (didUserWin(userThrow, computerThrow) === 'draw') {
        draws++;
        gameResult.textContent = `You have ${userThrow}. Computer has ${computerThrow}.  Draw!`;
    } else if (didUserWin(userThrow, computerThrow) === 'lose') {
        losses++;
        gameResult.textContent = `Computer's ${computerThrow} beats your ${userThrow}. You lose!`;
    }    

    setsScoreboard(userWins, wins);
    setsScoreboard(userLoses, losses);
    setsScoreboard(userDraws, draws);
    setsScoreboard(totalPlays, total);

});
resetButton.addEventListener('click', () => {
    resets++;
    wins = 0;
    losses = 0;
    draws = 0;

    setsScoreboard(userWins, '0');
    setsScoreboard(userLoses, '0');
    setsScoreboard(userDraws, '0');
    setsScoreboard(gameResult, '');
    setsScoreboard(gameResets, resets);
    
});