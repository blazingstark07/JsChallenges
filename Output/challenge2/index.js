import { handleAddItem, addToCart } from './utility.js';

let totalItems = 0;
document.getElementById('cartItems').style.display = 'none';

window.addToCartHandler = (event) => {
	addToCart(event, totalItems);
	totalItems += 1;
};

window.quantityHandler = (index, event) => {
	const id = event.target.parentNode.id;
	id === 'increase' ? (totalItems += 1) : (totalItems -= 1);
	handleAddItem(index, id, totalItems);
};