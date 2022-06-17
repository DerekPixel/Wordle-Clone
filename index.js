import dictionary from './dictionary.js';
import target from './targetWords.js';

const WORD_LENGTH = 5;
let currentWord = '';
const guessGrid = document.querySelector("[data-guess-grid]");
const targetWord = target[Math.floor(Math.random() * target.length)];

console.log(guessGrid);
console.log(targetWord);

startIntercation();

function startIntercation() {
  document.addEventListener('keydown', handleKeyPress);
  document.addEventListener('click', handleClick);
}

function endInteraction() {
  document.removeEventListener('keydown', handleKeyPress);
  document.removeEventListener('click', handleClick);
}

function handleKeyPress(event) {

}

function handleClick(event) {

  let clickTarget = event.target;

  if(clickTarget.matches('[data-key]')) {
    pressKey(clickTarget.textContent)
  }
}

function pressKey(key) {
  if(currentWord.length >= WORD_LENGTH) return;

  currentWord += key;
  const nextTile = guessGrid.querySelector(':not([data-letter])');
  nextTile.dataset.letter = key;
  nextTile.textContent = key;
  guessGrid.getAnimations

  console.log(currentWord);
}

function submitGuess() {

}

function backspace() {

}