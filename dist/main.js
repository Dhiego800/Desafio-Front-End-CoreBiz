'use strict';

var myAccount = document.getElementById('my-account');
var modalUser = document.querySelector('.modal-user-field');
var btnClose = document.querySelector('.modal-user-field .close');

myAccount.addEventListener("click", function () {
    modalUser.classList.toggle("active--js");
});

btnClose.addEventListener("click", function () {
    modalUser.classList.remove("active--js");
});
"use strict";

var bearsJson = {
  "bears": {
    "1": {
      "id": 1,
      "name": "Urso De Pelúcia Gigante Teddy",
      "image": "product.png",
      "price": 129.49
    },
    "2": {
      "id": 2,
      "name": "Urso De Pelúcia médio Teddy",
      "image": "product.png",
      "price": 89.49
    },
    "3": {
      "id": 3,
      "name": "Urso De Pelúcia pequeno Teddy",
      "image": "product.png",
      "price": 59.49
    },
    "4": {
      "id": 4,
      "name": "Urso De Pelúcia mini Teddy",
      "image": "product.png",
      "price": 19.49
    }
  }
};

var mainShelf = document.querySelector('.main__shelf');

function getProducts() {
  for (var i = 1; i < 5; i++) {
    var productItem = "\n      <li data-item=\"" + bearsJson.bears[i].id + "\">\n        <div class=\"product-img\">\n        <img src=\"../img/" + bearsJson.bears[i].image + "\" />\n        </div>\n        <p>" + bearsJson.bears[i].name + "</p>\n        <p>R$ <span>" + bearsJson.bears[i].price + "</span></p>\n        <button>Comprar <img src=\"../img/shop-cart.png\" /></button>\n      </li>\n      ";
    mainShelf.innerHTML += productItem;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getProducts();
});