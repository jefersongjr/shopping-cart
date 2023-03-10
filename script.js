const cartOl = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove('li');
  saveCartItems(cartOl.innerHTML); 
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const productList = async () => {
  const sectionItems = document.querySelector('.items');
  const itemList = await fetchProducts('computador');
  const itemResult = itemList.results;
  itemResult.forEach((product) => {
    const { id, title, thumbnail } = product;
    const sku = id;
    const name = title;
    const image = thumbnail;
    sectionItems.appendChild(createProductItemElement({ sku, name, image }));
  });
};

const addItemCart = async () => {
  await productList();
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => button.addEventListener('click', async () => {
    const getIdItem = button.parentNode.querySelector('.item__sku');
    const idItem = getIdItem.innerHTML;
    const url = await fetchItem(idItem);
    const { id: sku, title: name, price: salePrice } = url;
    const li = cartOl.appendChild(createCartItemElement({ sku, name, salePrice }));
    saveCartItems(cartOl.innerHTML);
    return li;
  }));
};

const salveCart = () => {
  const y = getSavedCartItems();
  cartOl.addEventListener('click', cartItemClickListener);
  cartOl.innerHTML = y;
};

const btnClear = () => {
  const btn = document.querySelector('.empty-cart');
  btn.addEventListener('click', () => {
    cartOl.innerHTML = '';
    localStorage.clear();
  });
};

btnClear();

window.onload = () => {
  addItemCart();
  salveCart();
};