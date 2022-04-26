const fetchProducts = (product) => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
  .then((result) => result.json())
  .catch();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
