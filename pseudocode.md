### Pseudocode

- keep interface simple
- button display output
- Just the basic calc
- digits, =, clear, /, *, +, -, .
- build in HTML page with a text box, or a label for the output
- give each button an i.d.

// globals: 'previousAnswer', 'currentNumber', 'calculation' < array of objects

// start with immediate and formula logic later
// store math in an array
// object, 2 property number and operation

// for loop through array, if, else if, else if, else
// for loop variable "result"

// function 'typeNumberCharacter(numberTyped)
// this function gets assigned to every onclick
// function takes user typed number then concatenates with 'currentNumber' variable
// logic for if decimal point exists don't allow another decimal point
// leave as a string if it ends in decimal point, ignore decimal point

// function 'operator(clickedOperation)' when '=' press.
// when operator is selected currentNumber get stored in calculation array along with operation
// and resets currentNumber to 0

// if second in double operator make number negative

// switch for logic after equal press, taking object 

// function to concatenate a string that prints to screen everytime they press a button.