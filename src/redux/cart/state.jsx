const cart = JSON.parse(localStorage.getItem('cart'))
const cartTotal = localStorage.getItem('cartTotal')
const initialCart = {
    items: Array.isArray(cart) ? cart : [],
    total: cartTotal ? cartTotal : '0.00'
}

export default initialCart;