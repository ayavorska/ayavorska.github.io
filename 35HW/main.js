"use strict";

function renderProducts(products) {
  const productsListResultEl = document.querySelector(".result");
  productsListResultEl.replaceChildren();
  if (products.length === 0) {
    const textNotFoundPr = document.createElement("p");
    textNotFoundPr.textContent = "Product not found.";
    productsListResultEl.appendChild(textNotFoundPr);
  }

  products.forEach((productItem) => {
    const productItemEl = document.createElement("div");
    productItemEl.classList.add("result__element");

    const productTitleEl = document.createElement("p");
    productTitleEl.textContent = productItem.title;

    const productDetailsBtnEl = document.createElement("button");
    productDetailsBtnEl.textContent = "Details";
    productDetailsBtnEl.classList.add("btn-details");

    productDetailsBtnEl.addEventListener("click", function () {
      renderProductDetails(productItem);
    });

    productItemEl.appendChild(productTitleEl);
    productItemEl.appendChild(productDetailsBtnEl);
    productsListResultEl.appendChild(productItemEl);
  });
}

function renderProductDetails(productItem) {
  const productListDetailsEl = document.querySelector(".details");
  productListDetailsEl.replaceChildren();

  const productTitleEl = document.createElement("p");
  productTitleEl.textContent = `Title: ${productItem.title}`;

  const productDescriptionEl = document.createElement("p");
  productDescriptionEl.textContent = `Description: ${productItem.description}.`;

  const productPriceEl = document.createElement("p");
  productPriceEl.textContent = `Price: ${productItem.price}$`;

  const productDiscountPercentageEl = document.createElement("p");
  productDiscountPercentageEl.textContent = `Discount Percentage: ${productItem.discountPercentage}$`;

  const productImageEl = document.createElement("img");
  productImageEl.src = productItem.thumbnail;

  productListDetailsEl.appendChild(productTitleEl);
  productListDetailsEl.appendChild(productDescriptionEl);
  productListDetailsEl.appendChild(productPriceEl);
  productListDetailsEl.appendChild(productDiscountPercentageEl);
  productListDetailsEl.appendChild(productImageEl);
}

const inputEl = document.getElementById("product-title");

const formEl = document.getElementById("searchForm");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const productListDetailsEl = document.querySelector(".details");
  productListDetailsEl.replaceChildren();

  
  if (inputEl.value.length < 4) {
    return;
  }
  fetch(`https://dummyjson.com/products/search?q=${inputEl.value}`)
    .then((res) => res.json())
    .then((body) => {
      console.log({ body });
      renderProducts(body.products);
    });
});
