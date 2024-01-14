
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsList = document.querySelector(".cart-items");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.forEach((cartItem) => {
        const ul = document.createElement("ul");
        ul.innerHTML = `<img src="${cartItem.image}" alt="${cartItem.name}" width="200"> ${cartItem.name} - ${cartItem.price}`;
        cartItemsList.appendChild(ul);
    });
});