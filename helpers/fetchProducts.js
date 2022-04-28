const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const fetchProducts = async (product) => {
   try {
     const urlApi = `${endPoint}${product}`;
     const response = await fetch(urlApi);
     const responseJson = await response.json();
     return responseJson;
   } catch (error) {
     return new Error('You must provide an url');
   } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
