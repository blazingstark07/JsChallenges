const menuItems = [{
	name: 'French Fries with Ketchup',
	price: 2.23,
	image: 'plate__french-fries.png',
	alt: 'French Fries',
	count: 0,
},
{
	name: 'Salmon and Vegetables',
	price: 5.12,
	image: 'plate__salmon-vegetables.png',
	alt: 'Salmon and Vegetables',
	count: 0,
},
{
	name: 'Spaghetti Meat Sauce',
	price: 7.82,
	image: 'plate__spaghetti-meat-sauce.png',
	alt: 'Spaghetti with Meat Sauce',
	count: 0,
},
{
	name: 'Bacon, Eggs, and Toast',
	price: 5.99,
	image: 'plate__bacon-eggs.png',
	alt: 'Bacon, Eggs, and Toast',
	count: 0,
},
{
	name: 'Chicken Salad with Parmesan',
	price: 6.98,
	image: 'plate__chicken-salad.png',
	alt: 'Chicken Salad with Parmesan',
	count: 0,
},
{
	name: 'Fish Sticks and Fries',
	price: 6.34,
	image: 'plate__fish-sticks-fries.png',
	alt: 'Fish Sticks and Fries',
	count: 0,
},
];

const computeSubTotal = () => {
	let subTotal = 0;
	for (let i = 0; i < menuItems.length; i++) {
		subTotal += menuItems[i].price * menuItems[i].count;
	}
	document.getElementById('SubTotal').textContent = `$ ${subTotal.toFixed(2)}`;
	return subTotal;
};

const computeTotal = () => {
	const baseTotal = computeSubTotal();
	const tax = baseTotal * 0.0975;
	document.getElementById('Tax').textContent = `$  ${tax.toFixed(2)}`;
	const total = baseTotal + tax;
	document.getElementById('Total').textContent = `$  ${total.toFixed(2)}`;
};

const updateItemCount = (index, sign) => {
	if (sign === '+') {
		menuItems[index].count += 1;
	} else if (sign === '-') {
		menuItems[index].count -= 1;
		if (menuItems[index].count < 1) {
			menuItems[index].count = 0;
			const changeAddtoCart = document.getElementsByTagName('button');
			changeAddtoCart[index].textContent = 'Add to Cart';
			changeAddtoCart[index].className = 'add';
			changeAddtoCart[index].disabled = false;
		}
	}
};

const findIndex = (id) => {
	switch (id) {
	case 'Fries':
		return 0;
	case 'Salmon':
		return 1;
	case 'Spaghetti':
		return 2;
	case 'Bacon':
		return 3;
	case 'Chicken':
		return 4;
	case 'Fish':
		return 5;
	}
};

const displayCartItems = (index, itemId) => {
	menuItems[index].count < 1 ?
		(document.getElementById(itemId).style.display = 'none') :
		(document.getElementById(itemId).style.display = 'block');
};

const displayCartContent = (index) => {
	const updateQuantity = document.getElementsByClassName('quantity');
	updateQuantity[2 * index].textContent = menuItems[index].count;
	updateQuantity[2 * index + 1].textContent = menuItems[index].count;
	document.getElementsByClassName('subtotal')[index].textContent = `$ 
        ${+(menuItems[index].count * menuItems[index].price).toFixed(2)}`;
};

const emptyCartMessage = (id1, id2) => {
	document.getElementById(id1).style.display = 'block';
	document.getElementById(id2).style.display = 'none';
};

export const addToCart = (event) => {
	const elementId = event.target.id;
	event.target.disabled = true;
	const index = findIndex(elementId);
	const itemId = 'item' + (index + 1);

	const classname = event.path[0];
	classname.textContent = 'In cart';
	classname.className = 'in-cart';

	updateItemCount(index, '+');
	computeTotal();
	emptyCartMessage('cartItems', 'emptyMessage');

	displayCartItems(index, itemId);
	displayCartContent(index);
};

export const handleAddItem = (index, id, totalItems) => {
	const itemId = 'item' + (index + 1);

	if (id === 'increase') updateItemCount(index, '+', totalItems);
	else if (id === 'decrease') updateItemCount(index, '-', totalItems);
	computeTotal();
	displayCartContent(index);

	displayCartItems(index, itemId);
	if (totalItems === 0) {
		emptyCartMessage('emptyMessage', 'cartItems');
	}
};