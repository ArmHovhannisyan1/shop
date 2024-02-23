import initiaState from './state'

export default function wishReducer(state = initiaState, action) {
    switch (action.type) {
        case 'TOGGLE_WISHLIST': {
            let newState = [...state.items]
            let elID = newState.findIndex(el => el.id === action.payload.id)
            if (elID !== -1) {
                newState.splice(elID, 1)
                localStorage.setItem('wish', JSON.stringify(newState))
                return {
                    ...state, items: [...newState]
                }
            } else {
                newState.unshift(action.payload)
                localStorage.setItem('wish', JSON.stringify(newState))
                return {
                    ...state, items: [...newState]
                }
            }
        } 
        default:
            return state;
    }
}