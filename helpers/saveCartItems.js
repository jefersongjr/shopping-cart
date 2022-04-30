const saveCartItems = (item) => {
  const x = localStorage.setItem('cartItems', item);
  return x;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
