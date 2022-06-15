import { handleAddItem, addToCart } from "./utility.js";

var totalItems = 0;
document.getElementById("cartItems").style.display = "none";

window.addToCartHandler = (event) => {
    addToCart(event, totalItems);
    totalItems += 1;
};

window.clickedOnImgHandler = (index, event) => {
    let id = event.target.parentNode.id;
    id == "increase" ? (totalItems += 1) : (totalItems -= 1);
    handleAddItem(index, id, totalItems);
};