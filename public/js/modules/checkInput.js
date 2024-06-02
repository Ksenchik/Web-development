export function  checkInput() {
  document.querySelector('#form-submit').addEventListener('click', function(event) {
    event.preventDefault();
    const inputText = document.querySelector('#form-name');
    const inputNumber = document.querySelector('#form-numb');
    
    if (inputText.value === '') {
      inputText.style.borderBottom = '2px solid red';
    } else {
      inputText.style.borderBottom = '2px solid #cbcbcd';
    }
    
    if (inputNumber.value === '') {
      inputNumber.style.borderBottom = '2px solid red';
    } else {
      inputNumber.style.borderBottom = '2px solid #cbcbcd';
    }
  });
}