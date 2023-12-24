export function headerCart(selectedBlock){
  document.querySelectorAll('.header-cart').forEach(function(block) {
    block.addEventListener('mouseover', function() {
      changeSize(this);
    });
  });
  
  function changeSize(selectedBlock) {
    var blocks = document.querySelectorAll('.header-cart');
    blocks.forEach(function(block) {
      if (block !== selectedBlock) {
        block.style.flex = '1'; // возвращаем остальным блокам исходную ширину
      }
    });
    selectedBlock.style.flex = '2'; // увеличиваем выбранный блок
  }
}