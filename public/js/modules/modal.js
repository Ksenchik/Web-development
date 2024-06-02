export function modal(){
  const modal = document.querySelector(".modal");
  const btn = document.querySelectorAll(".modal-btn");
  const body = document.querySelector('body');

  btn.forEach( e => {
    e.addEventListener('click', () =>{
      modal.style.display = "block";
      body.classList.add('over-hidden');
    })
  })

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.classList.remove('over-hidden')
    }
  };

  document.querySelector('#modal-submit').addEventListener('click', function(event) {
    event.preventDefault();
    const inputText = document.querySelector('#modal-name');
    const inputNumber = document.querySelector('#modal-numb');
    
    if (inputText.value === '') {
      inputText.style.borderBottom = '2px solid red';
    } else {
      inputText.style.borderBottom = '2px solid #374151';
    }
    
    if (inputNumber.value === '') {
      inputNumber.style.borderBottom = '2px solid red';
    } else {
      inputNumber.style.borderBottom = '2px solid #374151';
    }
  });
}