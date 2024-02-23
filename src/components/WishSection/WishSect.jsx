import { useDispatch, useSelector } from "react-redux";
import { toggleWishList } from "../../redux/wishlist/actions";
import { addToCart } from '../../redux/cart/actions'
import ForEveryPage from "../ForEveryPage/ForEveryPage";
import allStyles from './Wish.module.css';
import { Link } from 'react-router-dom'
import WishItem from "./WishItem";

export default function WishSect() {
    const dispatch = useDispatch()
    const wish = useSelector(state => state.wish)
    const cart = useSelector(state => state.cart)
    const info = { id: 'wish-first', bgImage: '/images/wishlist.jpg', title: 'WishList', href: 'Home' };
    if (wish.items.length == 0) {
        return (
            <section id="return-page-wish">
                <div className='container'>
                    <div className={"row w50 m-center text-center f-column f-jCenter " + allStyles.minHeight}>
                        <div>
                            <span className={allStyles.padBottom}>Your WishList is empty!!</span>
                        </div>
                        <div className="btn-parent">
                            {/* <button type="button"> */}
                                <Link className="btn" to='/shop'>Return to shop</Link>
                            {/* </button> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <>
            <ForEveryPage {...info} />
            <section id="wishList">
                <div className="container">
                    <div className={'row ' + allStyles.overflow}>
                        <table className={allStyles.table + ' text-center w100'}>
                            <thead className={allStyles.thead}>
                                <tr>
                                    <th></th>
                                    <th>Products</th>
                                    <th>Product name</th>
                                    <th>Unit price</th>
                                    <th>Stack status</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody className={allStyles.tbody}>
                                {wish.items.map((el) =>
                                    <WishItem
                                        key={el.id}
                                        item={el}
                                        index={el.id}
                                        onRemove={() => dispatch(toggleWishList(el))}
                                        onAddCart={() => dispatch(addToCart(el))}
                                        cart={cart}
                                    />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}