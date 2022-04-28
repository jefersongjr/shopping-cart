const url = "https://api.mercadolibre.com/items/"


const fetchItem = async (id) => {
  const apiIdUrl = `${url}${id}`;
  const response = await fetch(apiIdUrl);
  const responseJson = await response.json(); 
  return responseJson;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
