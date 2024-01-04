const productsContainer = document.querySelector(".products");

getProducts();

async function getProducts() {
  const response = await fetch("../assets/js/products.json");
  const productsArray = await response.json();
  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHTML = `<div class="product__card">
						    <img src="img/${item.imgSrc}" alt="">
							<h3>${item.title}</h3>
							<span>Тираж: от ${item.itemsInBox}штук</span>
							<p>${item.paragraph}</p>
							<a href="#">${item.itemsLink}</a>
						
					</div>`;
    productsContainer.insertAdjacentHTML("beforeend", productHTML);
  });
}
