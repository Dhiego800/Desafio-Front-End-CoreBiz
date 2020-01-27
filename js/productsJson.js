let bearsJson = {
    "bears": {
      "1": {
        "id": 1,
        "name": "Urso De Pelúcia Gigante Teddy",
        "image": "product.png",
        "price": 129.49,        
      },
      "2": {
        "id": 2,
        "name": "Urso De Pelúcia médio Teddy",
        "image": "product.png",
        "price": 89.49,
      },
      "3": {
        "id": 3,
        "name": "Urso De Pelúcia pequeno Teddy",
        "image": "product.png",
        "price": 59.49,
      },
      "4": {
        "id": 4,
        "name": "Urso De Pelúcia mini Teddy",
        "image": "product.png",
        "price": 19.49,
      },      
    }
  }

  const mainShelf = document.querySelector('.main__shelf');

  function getProducts(){
    for(let i = 1; i < 5; i++ ){
      let productItem = `
      <li data-item="${bearsJson.bears[i].id}">
        <div class="product-img">
        <img src="../img/${bearsJson.bears[i].image}" />
        </div>
        <p>${bearsJson.bears[i].name}</p>
        <p>R$ <span>${bearsJson.bears[i].price}</span></p>
        <button>Comprar <img src="../img/shop-cart.png" /></button>
      </li>
      `;
      mainShelf.innerHTML+= productItem;
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    getProducts();    
  })