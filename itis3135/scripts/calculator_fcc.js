const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
const calculator = document.querySelector('.calculator')
keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
    if (!action) {
        console.log('number key!')
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
      }
      if (action === 'decimal') {
        display.textContent = displayedNum + '.'
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
      if (!action) {
        if (displayedNum === '0') {
          display.textContent = keyContent
        }else {
            display.textContent = displayedNum + keyContent
      }
    }
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
 }
})