let previousAnswer = 0
let currentNumber = 0
let calculation = []
let currentOperation = '+'

let numberButtonArray = Array.from(document.querySelectorAll('.number'))
let operationButtonArray = Array.from(document.querySelectorAll('.operation'))

for(let i in numberButtonArray) {
  numberButtonArray[i].addEventListener('click', typeNumberCharacter)
}
for(let i in operationButtonArray) {
  operationButtonArray[i].addEventListener('click', typeOperation)
}

function typeNumberCharacter(event){
  let character = event.target.id
  if (currentNumber == 0){
    currentNumber = character
    return
  }

  if (character == '.' && currentNumber.toString().includes('.')){
    return
  }
  
  currentNumber = currentNumber.toString() + character

  updateDisplay()
  
console.log(character)
}


function typeOperation(event){
  let operation = event.target.id
  let previousNumber = {}

  previousNumber.number = currentNumber
  previousNumber.operation = currentOperation

  calculation.push(previousNumber)
  
  currentOperation = operation
  currentNumber = 0 
console.log(operation)
  updateDisplay()
}

function equals(){


  updateDisplay()
}

function updateDisplay(){
let displayText = ''
  if(calculation.length > 0){
    for (let i in calculation){
      if (i != 0){
        displayText += calculation[i].operation + ' '
      }
      displayText += calculation[i].number + ' '
    }
  }

  displayText += '\n\n' + currentNumber
  
  document.querySelector("#display").textContent = displayText
}