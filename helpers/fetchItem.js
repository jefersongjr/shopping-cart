const url = 'https://api.mercadolibre.com/items/';

const fetchItem = async (id) => {
  try {
    const apiIdUrl = `${url}${id}`;
    const response = await fetch(apiIdUrl);
    const responseJson = await response.json(); 
    return responseJson;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
