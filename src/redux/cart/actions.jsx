export function addToCart(product, quantity = 1) {
    return {
        type: 'ADD_TO_CART',
        payload: { product, quantity }
    };
};

export function removeFromCart(id) {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export function increment(id) {
    return {
        type: 'INCREMENT',
        payload: id
    }
}

export function decrement(id) {
    return {
        type: 'DECREMENT',
        payload: id
    }
}

export function emptyCart() {
    return {
        type: 'EMPTY_CART'
    }
}