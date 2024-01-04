const productsContainer = document.querySelector(".products");

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
  // Получаем данные из products.json
  const response = await fetch("../assets/js/products.json");
  // Парсим данные из JSON формата в JS
  const productsArray = await response.json();
  // Запускаем ф-ю рендера (отображения товаров)
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
