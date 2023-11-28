export function dropdown(){
  const headerDropdown = document.querySelector('.menu__btn');
  const dropdown = document.querySelector('.dropdown');
  const headerDropdownArrow = document.querySelector('.dropdown-arrow-bot');
  
  headerDropdown.addEventListener('click', () => {
    headerDropdown.classList.toggle('menu__btn--active');
    dropdown.classList.toggle('dropdown--active');
    headerDropdownArrow.classList.toggle('rotated'); 
  })

  document.addEventListener('click', (e) => {
    if( !e.target.closest('.menu')){
      headerDropdown.classList.remove('menu__btn--active');
      dropdown.classList.remove('dropdown--active');
      headerDropdownArrow.classList.remove('rotated'); 
    }
  });
}

