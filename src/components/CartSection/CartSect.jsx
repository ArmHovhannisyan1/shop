import { useDispatch, useSelector } from "react-redux";
import ForEveryPage from "../ForEveryPage/ForEveryPage";
import allStyles from './Cart.module.css';
import { removeFromCart, increment, decrement, emptyCart } from "../../redux/cart/actions";
import { Link } from 'react-router-dom'
import CartItem from "./CartItem";

export default function CartSect() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const info = { id: 'cart-first', bgImage: '/images/cart.jpg', title: 'Cart', href: 'Home' };

    if (cart.items.length == 0) {
        return (
            <section id="return-page-cart">
                <div className='container'>
                    <div className='row w50 m-center text-center f-column f-jCenter'>
                        <div>
                            <span>Your Cart is empty!!</span>
                        </div>
                        <div className="btn-parent">
                            <Link className="btn" to='/shop'>Return to shop</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <>
            <ForEveryPage {...info} />
            <section id="cart">
                <div className="container">
                    <div className={"row " + allStyles.overflow}>
                        <table className={"w100 text-center " + allStyles.table}>
                            <thead>
                                <tr>
                                    <td>Prouct images</td>
                                    <td>Product name</td>
                                    <td>Unit price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                    <td>Remove</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.items.map((el) =>
                                    <CartItem
                                        key={el.id}
                                        item={el}
                                        onRemove={() => dispatch(removeFromCart(el.id))}
                                        onIncrement={() => dispatch(increment(el.id))}
                                        onDecrement={() => dispatch(decrement(el.id))}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="row f-jBetween">
                        <div className="wrapper row f-aCenter w48">
                            <form className="row">
                                <div className="input-wrapper">
                                    <input type="text" placeholder="Coupon code" />
                                </div>
                                <div className="input-wrapper submit-wrapper">
                                    <input type="submit" className="btn" value='APPLY COUPON' />
                                </div>
                            </form>
                        </div>
                        <div className="wrapper row w48 f-jEnd">
                            <div className="btn-parent">
                                <button className="btn" onClick={() => dispatch(emptyCart())}>
                                    CLEAR CART
                                </button>
                            </div>
                            <div className="btn-parent">
                                <button className="btn">
                                    UPDATE CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row cart-totals f-jEnd">
                        <div className="wrapper w48">
                            <h4>Cart totals</h4>
                            <div className="row f-jBetween">
                                <p>Total</p>
                                <span>${cart.total}</span>
                            </div>
                            <div className="btn-parent">
                                <button className="btn">
                                    PROCEED TO CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}