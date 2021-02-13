const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   // Do something
 }
})

const key = e.target
const action = key.dataset.action

//number keys
if (!action) {
    console.log('number key!')
  }

//arithmatic keys
if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
  }

//decimal key
  if (action === 'decimal') {
    console.log('decimal key!')
  }
  
// clear key
  if (action === 'clear') {
    console.log('clear key!')
  }
  
//equal key
  if (action === 'calculate') {
    console.log('equal key!')
  }

        ///Calculator functionality\\\
//get two variables
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
  }
})

//replace displayed 0 w/ number
if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    }
  }

//display nonzero
if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }

//connect decimal to number
if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }

//highlight clicked arithmatic key
if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('is-depressed')
  }

//remove highligh
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target
      // ...
      
      // Remove .is-depressed class from all keys
      Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
  })

//update display
const calculator = document.querySelector('.calculator')
// ...

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // ...
    
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-depressed')
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator'
    }
  }
})

//replace number being displayed w/ new number
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'calculate') {
    const secondValue = displayedNum
    // ...
  }

//store calculator values
if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    // ...
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
  }

//calculation
const calculate = (n1, operator, n2) => {
    let result = ''
    
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
  }
