import products from './products.json' assert {type: "json"}

const productsItems = document.querySelector(".products__items");
const cartItems = document.querySelector(".cart__items");

const cart = [];

products.forEach(product => {
    const item = `
    <div class="product__item">
        <div class="product__item__img">
            <img src="/images/${product.img}" alt="image">
        </div>
        <h3 class="product__item__name">${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button class="btn abso-btn" data-id="${product.id}">Add to Order</button>
    </div>`;
    productsItems.innerHTML += item;
})
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", addItemToCart);
})

function renderCart() {
    console.log(cart)
    cartItems.innerHTML = "";
    cart.forEach(cartItem => {
        const item = `
        <li class="cart__item">
            <div class="cart__item__img">
                <img src="/images/${products[cartItem-1].img}" alt="image">
            </div>
            <div class="cart__item__info">
                <h3 class="cart__item__name">${products[cartItem-1].name}</h3>
                <p class="price">$${products[cartItem-1].price}</p>
                <button class="remove-btn">Remove Order item</button>
            </div>
        </li>
        `;
        cartItems.innerHTML += item;
        let remove = document.querySelectorAll('.remove-btn');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
            });
        })
}
function addItemToCart(e) {
    cart.push(e.target.dataset.id);
    renderCart();
}

renderCart();