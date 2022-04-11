const computerChoiceDsiplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let result
let computerChoice

const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach((choice) =>
  choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  })
)

const generateComputerChoice = () => {
  const index = Math.floor(Math.random() * possibleChoices.length)
  computerChoice = possibleChoices[index].id
  computerChoiceDsiplay.innerHTML = computerChoice
}

const getResult = () => {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!'
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lose!'
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!'
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!'
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you win!'
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}
