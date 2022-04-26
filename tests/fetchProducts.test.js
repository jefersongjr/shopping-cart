require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  
  beforeEach(async () => {
    return result = await fetchProducts('products');
  })

  it('Testa se fetchProducts é uma função',() => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Testa se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', async () => {
    const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(urlApi);
  })

  //fail('Teste vazio');
});
