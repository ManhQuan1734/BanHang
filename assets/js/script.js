'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

// order item variables
const orderItems = document.querySelectorAll('[data-order-item]');

for (let i = 0; i < orderItems.length; i++) {

  // order item click function
  orderItems[i].addEventListener('click', function () {
    // Thực hiện hành động khi đơn hàng được click
    console.log(`Đơn hàng ${i + 1} đã được click`);

  });

}

// Giỏ hàng
let cart = [];

// Thêm sản phẩm vào giỏ hàng
const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product-name');
    const productPrice = parseFloat(this.getAttribute('data-product-price'));
    
    cart.push({ name: productName, price: productPrice });
    updateCart();
  });
});

// Cập nhật giỏ hàng
function updateCart() {
  const cartItemsContainer = document.querySelector('[data-cart-items]');
  cartItemsContainer.innerHTML = '';
  
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toFixed(2)}đ`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Xóa';
    removeButton.addEventListener('click', function() {
      cart.splice(index, 1);
      updateCart();
    });
    
    li.appendChild(removeButton);
    cartItemsContainer.appendChild(li);
  });
}

// Hủy giỏ hàng
const clearCartButton = document.querySelector('[data-clear-cart]');
clearCartButton.addEventListener('click', function() {
  cart = [];
  updateCart();
});

