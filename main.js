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

function calculate() {
  let result;

  if (firstValueInput.value.length === 0 || secondValueInput.value.length === 0) {
    resultField.textContent = 'Вы не ввели число';
    return;
  }

  let num1 = Number(firstValueInput.value)
  let num2 = Number(secondValueInput.value)

  if ((num1 > 99999999) || (num2 > 99999999)) {
    resultField.textContent = 'Калькулятор может работать с числами не больше 99 999 999';
    return;
  }

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

    console.log(currentOperator);
      
  }
})

document.body.addEventListener('keydown', e => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {  
    e.preventDefault(); 
    calculate();
  }
});

calculateBtn.addEventListener('click', calculate);