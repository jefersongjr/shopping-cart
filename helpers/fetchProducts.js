const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=';
const fetchProducts = async (product) => {
   try {
     const urlApi = `${endPoint}${product}`;
     const response = await fetch(urlApi);
     const responseJson = await response.json();
     return responseJson.results;
   } catch (error) {
     error = new Error('You must provide an url');
     return error;
   }
  
  
};

console.log( fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
