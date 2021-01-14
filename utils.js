export function getRandomThrow(number) {
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else if (number === 2) {
        return 'scissors';
    }
}

export function didUserWin(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    }
}

export function setsScoreboard(domElement, data) {
    domElement.textContent = data;
}
