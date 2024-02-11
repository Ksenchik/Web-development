export function headerCart(selectedBlock) {
  function handleCartDisplay() {
    if (window.innerWidth < 1000) {
      showAllCartInfo();
    } else {
      showCartOnHover();
    }
  }

  function showCartOnHover() {
    document.querySelectorAll('.header-cart').forEach(function(block) {
      block.addEventListener('mouseover', function() {
        if (window.innerWidth >= 1000) {
          changeSize(this);
        }
      });
    });
  }

  function changeSize(selectedBlock) {
    var blocks = document.querySelectorAll('.header-cart');
    blocks.forEach(function(block) {
      if (block !== selectedBlock) {
        block.style.flex = '1';
        Array.from(block.querySelectorAll('.cart-info')).forEach(function(cartInfo) {
          cartInfo.classList.remove('el--active');
          cartInfo.classList.add('el--inactive');
        });
      }
    });
    selectedBlock.style.flex = '2';
    Array.from(selectedBlock.querySelectorAll('.cart-info')).forEach(function(cartInfo) {
      cartInfo.classList.remove('el--inactive');
      cartInfo.classList.add('el--active');
    });
  }

  function showAllCartInfo() {
    document.querySelectorAll('.header-cart').forEach(function(block) {
      Array.from(block.querySelectorAll('.cart-info')).forEach(function(cartInfo) {
        cartInfo.classList.remove('el--inactive');
        cartInfo.classList.add('el--active');
      });
    });
  }

  handleCartDisplay();
  window.addEventListener('resize', handleCartDisplay);
}

