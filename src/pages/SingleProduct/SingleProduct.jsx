import { Link, useLocation } from "react-router-dom"
import SliderPr from "../../components/SliderPr.jsx/SliderPr"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, decrement, increment } from "../../redux/cart/actions"
import { toggleWishList } from "../../redux/wishlist/actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import allStyles from '../../components/ShopSections/Products/Modal/Modal.module.css'
import styles from '../../components/ShopSections/Products/Product.module.css'
import { useState } from "react"

export default function SingleProduct() {
    const pr = useLocation()
    const product = pr.state ? pr.state.product : null;
    // console.log(product)
    // console.log(product.category)
    const cart = useSelector(state => state.cart)
    const wish = useSelector(state => state.wish)
    const dispatch = useDispatch()

    const cartFind = cart.items.find(item => item.id === product.id)
    const wishFind = wish.items.find(item => item.id === product.id)
    const [quantity, setQuantity] = useState(1)
    // const handleIncrement = () => {
    //     setQuantity(quantity + 1)
    //     dispatch(increment(product.id))
    // }

    // const handleDecrement = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1)
    //         dispatch(increment(product.id))
    //     }
    // }
    if (!product) { 
        return <div>Product not found</div>;
    }
    return (
        <section id="product">
            <div className="container">
                <div className="row f-jBetween">
                    <SliderPr {...product} />
                    <div className={`${allStyles.wrapper}` + ' info rel w50 row f-column f-jBetween'}>
                        <div className={allStyles.title + ' title'}>
                            <h4>{product.title}</h4>
                        </div>
                        <div className={styles.productInfo}>
                            <span>${product.price}</span>
                            <span className={styles.discount}>${product.discount}</span>
                        </div>
                        <div className="about">
                            <p>Availability :{product.availability}</p>
                            <p>Sku: 0028KE21</p>
                            <p className={allStyles.desc + ' desc'}>{product.description}</p>
                        </div>
                        <form>
                            <div className="form-container row f-aCenter">
                                {cartFind ?
                                    <Link to='/cart' className="custom-tooltip" data-tooltip="Go To Cart">
                                        <FontAwesomeIcon
                                            className={allStyles.icon}
                                            icon={faAngleDoubleRight}
                                        />
                                    </Link>
                                    :
                                    <>
                                        <span>Quantity:</span>
                                        <div className="row f-aCenter">
                                            <div className={allStyles.controlQuantity}>
                                                <button type="button" disabled={quantity === 1} onClick={() => { setQuantity(quantity - 1), dispatch(decrement(product.id)) }}>-</button>
                                                <span>{quantity}</span>
                                                <button type="button" onClick={() => { setQuantity(quantity + 1), dispatch(increment(product.id)) }}>+</button>
                                            </div>
                                            <div className="custom-tooltip" data-tooltip="Add to Cart" onClick={() => dispatch(addToCart(product, quantity))}>
                                                <FontAwesomeIcon className={allStyles.icon} icon={faShoppingCart} />
                                            </div>
                                        </div>
                                    </>}
                                <div
                                    className='custom-tooltip'
                                    data-tooltip={(wishFind) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                    onClick={() => dispatch(toggleWishList(el))}
                                >
                                    <FontAwesomeIcon className={`${allStyles.icon} fa-Heart ${wishFind ? ' active' : ''}`}
                                        icon={faHeart} />
                                </div>
                            </div>
                        </form>
                        <div>
                            <p>Categories: <Link to='/'>{product.category}</Link></p>
                            <p>Tags: <Link to='/'>Living room</Link> <Link to='/'>Furniture</Link> <Link to='/'>Table</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
