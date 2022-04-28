require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  
  it('Teste se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })


  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () =>{
  const apiIdUrl = 'https://api.mercadolibre.com/items/MLB1615760527';
  await fetchItem('MLB1615760527');
  expect(fetch).toHaveBeenCalledWith(apiIdUrl);
  })

 // fail('Teste vazio');
});
