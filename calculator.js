let previousAnswer = 0
let currentNumberString = ''
let calculation = []
let currentOperation = 'plus'

function typeNumberCharacter(event) {
  let character = event.target.id

  if (character == 'decimal' && currentNumberString.includes('.')) {
    console.log('double decimal typed')
    return
  }

  if (character == 'decimal') {
    currentNumberString = currentNumberString.concat('.')
  } else {
    currentNumberString = currentNumberString.concat(character)
  }

  updateCurrentNumberDisplay()
}

function typeOperation(event) {
  let operation = event.target.id

  if (currentNumberString != '0') {
    pushCurrentNumberToCalculationArray()
  }

  currentOperation = operation
  currentNumberString = '0'

  updateCalculationDisplay()
  updateCurrentNumberDisplay()
}

function equals() {
  pushCurrentNumberToCalculationArray()
  currentOperation = 'equals'
  updateCalculationDisplay()
  displayAnswer()
}

function calculateAnswer() {
  if (calculation.length == 0) {
    return 0
  }

  let answer = 0

  for (let i in calculation) {
    switch (calculation[i].operation) {
      case 'plus':
        answer += calculation[i].number
        break
      case 'minus':
        answer -= calculation[i].number
        break
      case 'multiply':
        answer *= calculation[i].number
        break
      case 'divide':
        answer /= calculation[i].number
        break
      default:
        console.log('error calculating answer')
        break
    }
  }

  return answer
}

function displayAnswer() {
  document.querySelector('#currentNumberDisplay').textContent =
    calculateAnswer()
}

function clear() {
  currentNumberString = ''
  calculation = []
  currentOperation = 'plus'
  updateCurrentNumberDisplay()
  updateCalculationDisplay()
}

function pushCurrentNumberToCalculationArray() {
  calculation.push({
    number: Number(currentNumberString),
    operation: currentOperation,
  })

  currentNumberString = '0'
}

function updateCurrentNumberDisplay() {
  // console.log('updating number display with: ' + currentNumberString)

  // let number = Number(currentNumberString).toString()
  // if (currentNumberString.includes('.')) {
  //   number = number.concat('.')
  // }

  let charArray = currentNumberString.split('')
  for (let i in charArray) {
    if (charArray[i] == '0') {
      charArray.shift()
    } else {
      break
    }
  }

  document.querySelector('#currentNumberDisplay').textContent =
    charArray.join('')
}

function updateCalculationDisplay() {
  let displayText = ''
  if (calculation.length > 0) {
    for (let i in calculation) {
      if (i != 0) {
        displayText += getOperationText(calculation[i].operation) + ' '
      }

      displayText += Number(calculation[i].number) + ' '
    }

    displayText += getOperationText(currentOperation)
  }

  // console.log('updating calc display with: ' + displayText)

  document.querySelector('#calculationDisplay').textContent = displayText

  // console.log('currentnumberstring: ' + currentNumberString)
  console.log(calculation)
}

function getOperationText(operation) {
  switch (operation) {
    case 'plus':
      return '+'
    case 'minus':
      return '-'
    case 'multiply':
      return 'x'
    case 'divide':
      return '÷'
    case 'equals':
      return '='
    default:
      return 'error getting operation text'
  }
}

// Add event listeners
let numberButtonArray = Array.from(document.querySelectorAll('.number'))
let operationButtonArray = Array.from(document.querySelectorAll('.operation'))

for (let i in numberButtonArray) {
  numberButtonArray[i].addEventListener('click', typeNumberCharacter)
}

for (let i in operationButtonArray) {
  operationButtonArray[i].addEventListener('click', typeOperation)
}

document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#clear').addEventListener('click', clear)
