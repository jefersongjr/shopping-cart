const getSavedCartItems = () => {
  const cartOl = document.querySelector('.cart__items');
  const listLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
  cartOl.innerHTML = listLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
