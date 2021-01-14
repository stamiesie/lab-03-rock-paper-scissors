
import { getRandomThrow, didUserWin } from '../utils.js';

const test = QUnit.test;

////////// Tests for getRandomThrow //////////

test('It should return rock when given 0 as an argument', (expect) => {
    const expected = 'rock';
    const actual = getRandomThrow(0);

    expect.equal(actual, expected);
});

test('It should return paper when given 1 as an argument', (expect) => {
    const expected = 'paper';
    const actual = getRandomThrow(1);

    expect.equal(actual, expected);
});

test('It should return scissors when given 2 as an argument', (expect) => {
    const expected = 'scissors';
    const actual = getRandomThrow(2);

    expect.equal(actual, expected);
});

////////// Tests for didUserWin //////////

test('It should return draw when given rock and rock as an argument', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

test('It should return draw when given paper and paper as an argument', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('paper', 'paper');

    expect.equal(actual, expected);
});

test('It should return draw when given scissors and scissors as an argument', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});

test('It should return win when given paper and rock as an argument', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('It should return win when given scissors and paper as an argument', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});

test('It should return win when given rock and scissors as an argument', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('It should return lose when given paper and scissors as an argument', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});

test('It should return lose when given scissors and rock as an argument', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});

test('It should return lose when given rock and paper as an argument', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper');

    expect.equal(actual, expected);
});