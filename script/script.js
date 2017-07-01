var catalogViewItem = document.querySelectorAll('.catalog_view__item'),
	catalogList = document.querySelector('.catalog__list');


for (var i = 0; i < catalogViewItem.length; i++) {

	catalogViewItem[i].addEventListener('click', function(e) {
		var elem = e.currentTarget;

		if (!elem.classList.contains('catalog_view__item--active')) {
			elem.classList.toggle('catalog_view__item--active');

			if (elem.nextSibling !== 'null') {
				elem.nextSibling.classList.remove('catalog_view__item--active');
			}
			// } else {
			// 	e.currentTarget.previousSibling.classList.toggle('catalog_view__item--active');
			// }
		}

		//доделать переключение



	}, false)
}

//сделать функцию тоглер на вкладки фильтра
//
//Модальное окно через стиль дисплей:ноне
//отслеживать клик по подложке через крестик и нажатии вне модального окна
//

var arrayCart = [];
var btnsToCard = document.querySelectorAll('.catalog_cart__btn');
var btnsClose = document.querySelectorAll('.catalog_basket__close');
var list = document.querySelector('.catalog_basket__list');
var finalPrice = document.querySelector('.catalog_basket__summ_text');

for (var i = 0; i < btnsToCard.length; i++) {
	btnsToCard[i].addEventListener('click', addToCart, false);
}

for (var i = 0; i < btnsClose.length; i++) {
	btnsClose[i].addEventListener('click', removeFromCart, false);
}

function addToCart(e) {
	e.preventDefault();
	var item = this.closest('.catalog_cart'),
		title = document.querySelector('.catalog_cart__title').textContent,
		price = Number(item.dataset.price);
	var itemObj = {
		title: title,
		price: price
	};

	arrayCart.push(itemObj);
	calcPrice();
	renderCart();
}

function removeFromCart() {
	alert();
	//var line
	//var title
	//var price
	//
	//for array
	//if элемент массива совпадет с тем который мы удаляем то
	//удалить
	//breake
}


function cleanCart() {
	list.innerHTML = '';
}

function renderCart() {
	cleanCart();

	arrayCart.forEach(function(item, i) {
		var newItem = document.createElement('div');
		newItem.className = 'catalog_basket__line',
		//как вариант добавлять ид для отслеживания элементов
		newItem.innerHTML = `<div class="catalog_basket__line">
                                 <div class="catalog_basket__product">` + item.title + `</div>
                                 <div class="catalog_basket__price price">` + item.price + `</div>
                                 <div class="catalog_basket__close">
                                    <img src="img/svg/i-close.png" alt="close">
                                 </div>
                              </div>`;

		newItem.querySelector('.catalog_basket__close img').addEventListener('click', removeFromCart, false);
		//переделать добавление img через createElement и делегирование событий

		list.appendChild(newItem);
	});
}

function calcPrice() {
	var price = 0;
	arrayCart.forEach(function(item, i) {
		price += item.price;
	});
	finalPrice.textContent = price;
}