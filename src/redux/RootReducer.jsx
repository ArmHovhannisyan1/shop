import cartReducer from "./cart/reducer";
import wishReducer from "./wishlist/reducer";
import { combineReducers } from 'redux';
import filterReducer from "./filter/reducer";

const RootReducer = combineReducers({
    cart: cartReducer,
    wish: wishReducer,
    filter: filterReducer
})

export default RootReducer;