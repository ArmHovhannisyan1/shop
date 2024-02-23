import initialState from './state'

function updateStorage(newState) {
    localStorage.setItem('cart', JSON.stringify(newState))
    let total = newState.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    localStorage.setItem('cartTotal', total)
    return total
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { product, quantity } = action.payload;
            const newState = [...state.items];
            let elID = newState.find(el => el.id === product.id);
            const newQuantity = isNaN(quantity) ? 1 : quantity;
            if (elID) {
                elID.quantity += newQuantity;
            } else {
                let newItem = { ...product, quantity: newQuantity };
                newState.unshift(newItem);
            }
            let total = updateStorage(newState);
            return {
                ...state,
                items: [...newState],
                total: total,
            };
        }
        case 'REMOVE_FROM_CART': {
            const newState = [...state.items]
            let elID = newState.findIndex(el => el.id === action.payload)
            newState.splice(elID, 1)
            let total = updateStorage(newState)
            return {
                ...state,
                items: [...newState],
                total: total
            }
        }
        case 'INCREMENT': {
            const newState = [...state.items]
            let elID = newState.findIndex(el => el.id === action.payload)
            if (elID !== -1) {
                newState[elID].quantity++
                let total = updateStorage(newState)
                return {
                    ...state,
                    items: [...newState],
                    total: total
                }
            }
            else {
                return state
            }
        }
        case 'DECREMENT': {
            const newState = [...state.items]
            let elID = newState.findIndex(el => el.id === action.payload)
            if (elID !== -1) {
                newState[elID].quantity--
                console.log(newState[elID].quantity);
                let total = updateStorage(newState)
                return {
                    ...state,
                    items: [...newState],
                    total: total
                }
            }
            else {
                return state
            }
        }
        case 'EMPTY_CART': {
            let newState = []
            try {
                localStorage.setItem('cart', JSON.stringify(newState))
                localStorage.setItem('cartTotal', '0.00')
                return {
                    ...state,
                    items: [...newState],
                    total: '0.00'
                }
            } catch (err) {
                console.log('Error: ', err.message);
            }
        }
        default:
            return state;
    }
}