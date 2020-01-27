let productsList = {
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
      <li data-item="${productsList.bears[i].id}">
        <div class="product-img">
        <img src="../img/${productsList.bears[i].image}" />
        </div>
        <p class='product-name'>${productsList.bears[i].name}</p>
        <p class='product-price'>R$ <span>${productsList.bears[i].price}</span></p>
        <a href="product.html" class="product-buy">Comprar <img src="../img/shop-cart.png" /></a>
      </li>
      `;
      mainShelf.innerHTML+= productItem;
    }
  }

  document.addEventListener("DOMContentLoaded", function(){
    getProducts();    
  })
const myAccount = document.querySelector('#my-account');
const modalUser = document.querySelector('.modal-user-field');
const btnClose = document.querySelector('.modal-user-field .close')

myAccount.addEventListener("click", ()=> {
    modalUser.classList.toggle("active--js");    
})

btnClose.addEventListener("click", ()=> {
    modalUser.classList.remove("active--js");    
})

// let zoomer = ()=>{
//     document.querySelector('.product__img')
//       .addEventListener('mousemove', function(e) {
  
//       let imgInit = document.querySelector('.product__img img'),
//           magnified = document.getElementById('img-zoom'),
//           style = magnified.style,
//           x = e.pageX - this.offsetLeft,
//           y = e.pageY - this.offsetTop,
//           imgWidth = imgInit.width,
//           imgHeight = imgInit.height,
//           xperc = ((x/imgWidth) * 100),
//           yperc = ((y/imgHeight) * 100);
  
//       if(x > (.01 * imgWidth)) {
//         xperc += (.15 * xperc);
//       };//lets user scroll past right edge of image
  
//       if(y >= (.01 * imgHeight)) {
//         yperc += (.15 * yperc);
//       };//lets user scroll past bottom edge of image
  
//       style.backgroundPositionX = (xperc - 9) + '%';
//       style.backgroundPositionY = (yperc - 9) + '%';
  
//       style.left = (x - 180) + 'px';
//       style.top = (y - 180) + 'px';
  
//     }, false);
//   }
//   zoomer();