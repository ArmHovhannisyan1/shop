import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function CartButton() {
    const cart = useSelector(state => state.cart);
    return (
        <span className="cart-icon rel">
                <div className="cart-length">{cart.items.length}</div>
                <FontAwesomeIcon icon={faShoppingCart} />
        </span>
    )
}