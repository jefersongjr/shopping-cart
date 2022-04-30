const getSavedCartItems = () => {
  const listLocalStorage = localStorage.getItem('cartItems');
  return listLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
