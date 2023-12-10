export function burger() {
  const menuButton = document.querySelector('.header__burger');
  const menuButton1 = document.querySelector('.header__menu');
  const menuModal = document.querySelector('.header__modal');
  const line1 = document.querySelector('.burger-1');
  const line2 = document.querySelector('.burger-2');
  const line3 = document.querySelector('.burger-3');
  const contentBody = document.querySelector('body');
  const btnDropdown = document.querySelector('.menu__btn');

  btnDropdown.addEventListener('click', function(e) {
    e.stopPropagation(); 
  });

  let dropdownActive = false;

  menuButton.onclick = function () {
    toggleMenu();
  };
  
  menuButton1.onclick = function () {
    closeMenu();
  };
  
  menuModal.onclick = function (e) {
    if (!e.target.closest('.header__menu') && !e.target.closest('.header__burger') && !e.target.closest('.menu__btn') && dropdownActive) {
      closeMenu();
    }
  };
  
  function toggleMenu() {
    menuButton.classList.toggle('active');
    menuButton1.classList.toggle('active');
    menuModal.classList.toggle('header__modal--active');
    line1.classList.toggle('burger-1--active');
    line2.classList.toggle('burger-2--active');
    line3.classList.toggle('burger-3--active');
    contentBody.classList.toggle('lock');
    dropdownActive = !dropdownActive;
  }
  
  function closeMenu() {
    menuButton.classList.remove('active');
    menuButton1.classList.remove('active');
    menuModal.classList.remove('header__modal--active');
    line1.classList.remove('burger-1--active');
    line2.classList.remove('burger-2--active');
    line3.classList.remove('burger-3--active');
    contentBody.classList.remove('lock');
    dropdownActive = false;
  }

}
