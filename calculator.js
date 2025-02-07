let previousAnswer = 0
let currentNumber = 0
let calculation = []
let currentOperation = '+'


function typeNumberCharacter(character){
  if (currentNumber == 0){
    currentNumber = character
    return
  }

  if (character == '.' && currentNumber.toString().includes('.')){
    return
  }
  
  currentNumber = currentNumber.toString() + character

  updateDisplay()
}

function typeOperation(operation){
  let previousNumber = {}

  previousNumber.number = currentNumber
  previousNumber.operation = currentOperation

  calculation.push(previousNumber)

  currentOperation = operation
  currentNumber = 0 

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

  displayText += '\n\ncurrentNumber'
  
  document.querySelector("#display").textContent = displayText
}