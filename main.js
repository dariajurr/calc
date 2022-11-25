const calculatorItems = document.querySelector('.calculator__items');
const calculatorAllBtns = document.querySelectorAll('.calculator__btn');
const firstValueInput = document.getElementById('num1');
const secondValueInput = document.getElementById('num2');
const calculateBtn = document.getElementById('calculate');
const resultField = document.getElementById("result");
let currentOperator; 

function clearChecked() {
  calculatorAllBtns.forEach(el => {
    el.classList.remove("light");
  });
}

function resetFields() {
  clearChecked();
  currentOperator = '';
  firstValueInput.value = '';
  secondValueInput.value = '';
}

function validateInpit(value) {
  value
}

firstValueInput.addEventListener('input', (event) => {
  resultField.textContent = '';
  const target = event.target;
  //console.log(firstValueInput.value)
  console.log(target.value);
  console.log(target.value.replace(/(^(?:0|[1-9]\d{0,5})(?:[\.,]\d{1,3})?$)/gm, ''))
  //target.value = target.value.replace(/^-?\d+\.?\d*?$/g, '');

  if (target.value.length > 9) {
    target.value = target.value.substring(0, 9);
    resultField.textContent = 'Калькулятор может работать с числами не больше 99 999 999';
  }

});

function calculate() {
  let result;

  if (firstValueInput.value.length === 0 || secondValueInput.value.length === 0) {
    resultField.textContent = 'Вы не ввели число';
    return;
  }

  let num1 = Number(firstValueInput.value)
  let num2 = Number(secondValueInput.value)

  /*if ((num1 > 99999999) || (num2 > 99999999)) {
    resultField.textContent = 'Калькулятор может работать с числами не больше 99 999 999';
    return;
  }*/

  if ((num2 === 0) && (currentOperator === '÷')) {
    resultField.textContent =  'На ноль делить нельзя';
    return;
  }

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '−':
      result = num1 - num2;
      break;
    case '×':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
    default: result = 'Выберите действие'
  }

  resultField.textContent = result;

  if(result !== 'Выберите действие') {
    resetFields();
  }
}

calculatorItems.addEventListener('click',e => {
  if (e.target.matches(".calculator__btn")) {
    clearChecked();

    if (currentOperator !== e.target.textContent) {
      e.target.classList.add("light");
      currentOperator = e.target.textContent;
    } else {
      currentOperator = '';
    }      
  }
})

document.body.addEventListener('keydown', e => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {  
    e.preventDefault(); 
    calculate();
  }
});

calculateBtn.addEventListener('click', calculate);