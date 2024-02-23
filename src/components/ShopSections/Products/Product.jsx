import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart/actions"
import { toggleWishList } from "../../../redux/wishlist/actions";
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import allStyles from './Product.module.css'

export default function Product(props) {
    const { el, showModalHandler, prRow } = props
    const items = el.color.split(',').map(color => color.trim());
    // console.log(items)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const wish = useSelector(state => state.wish)
    const wishFind = wish.items.find(item => item.id === el.id)
    const cartFind = cart.items.find(item => item.id === el.id)
    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)

    function onHover() {
        // setHover(false)
        setHover(true)
    }
    function onHoverLeave() {
        setHover(false)
    }

    return (
        <div className={`wrapper w30 rel ${allStyles.wrapper} ${prRow === 1 ? ' row f-ow f-aCenter' : ''}`}
            style={{ flex: ` 0 0 calc(${100 / prRow}% - 10px)` }}
            onMouseEnter={() => (prRow === 1) ? setShow(false) : setShow(true)}
            onMouseLeave={() => setShow(false)}>
            <div className="product-image rel">
                <div className="product-item rel">
                    <NavLink to={`/product/${el.id}`} state={{ product: el }}>
                        <div
                            style={{height: `${prRow === 5 ? '350px' : prRow === 4 ? '400px' : prRow === 3 ? '550px' : prRow === 2 ? '700px' : ''}`}}
                            className="image">
                            <img className={allStyles.img} src={'/images/' + el.image} alt="" />
                        </div>
                    </NavLink>
                    {show &&
                        <div
                            onMouseEnter={onHover}
                            onMouseLeave={onHoverLeave}
                            className={`wrapper-hover ${el.hoverimage ? allStyles.wrapperHover : ''}`}
                        >
                            {el.hoverimage &&
                                <NavLink to={`/product/${el.id}`} state={{ product: el }}>
                                    <div
                                        style={{height: `${prRow === 5 ? '350px' : prRow === 4 ? '400px' : prRow === 3 ? '550px' : prRow === 2 ? '700px' : ''}`}}  
                                        className="image">
                                        <img className={`visible ${allStyles.img}`} src={`/images/${el.hoverimage}`} alt="" />
                                    </div>
                                </NavLink>
                            }
                            <ul className={`row f-aCenter ${allStyles.ul} ${ allStyles.ulHover}`}>
                                {/* {console.log(hover)} */}
                                <li>
                                    {(cartFind) ?
                                        <Link to='/cart' className="custom-tooltip" data-tooltip="Go To Cart">
                                            <FontAwesomeIcon
                                                className={allStyles.icon}
                                                icon={faAngleDoubleRight}
                                            />
                                        </Link> :
                                        <div className="custom-tooltip" data-tooltip="Add to Cart" onClick={() => dispatch(addToCart(el))}>
                                            <FontAwesomeIcon className={allStyles.icon} icon={faShoppingCart} />
                                        </div>
                                    }
                                </li>
                                <li>
                                    <div className="custom-tooltip" data-tooltip="View Details" onClick={() => showModalHandler(el)}>
                                        <FontAwesomeIcon className={allStyles.icon} icon={faEye} />
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className='custom-tooltip'
                                        data-tooltip={(wishFind) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                        onClick={() => dispatch(toggleWishList(el))}
                                    >
                                        <FontAwesomeIcon className={`${allStyles.icon} fa-Heart ${wishFind ? ' active' : ''}`}
                                            icon={faHeart} />
                                    </div>
                                </li>
                            </ul>
                        </div>}
                </div>
            </div>
            <div className={allStyles.productInfo}>
                <h5>{el.title}</h5>
                <span>${el.price}</span>
                <span className={allStyles.discount}>${el.discount}</span>

                <code className={allStyles.colorProductWrapper}>
                    {items.map((color, index) => (
                        <span key={index}
                            className={allStyles.colorProduct}
                            style={{
                                backgroundColor: color,
                                border: color === 'white' ? '1px solid #ccc' : 'none',
                                transform: color === 'white' ? 'scaleX(0.862)' : 'none',
                            }}>
                        </span>
                    ))}
                </code>

                {prRow === 1 && <>
                    <p>
                        {el.description}
                    </p>
                    <ul className="row">
                        <li>
                            <div
                                className='custom-tooltip'
                                data-tooltip={(wishFind) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                onClick={() => dispatch(toggleWishList(el))}
                            >
                                <FontAwesomeIcon className={`${allStyles.icon} fa-Heart ${wishFind ? ' active' : ''}`}
                                    icon={faHeart} />
                            </div>
                        </li>
                        <li>
                            {(cartFind) ?
                                <Link to='/cart' className="custom-tooltip" data-tooltip="Go To Cart">
                                    <FontAwesomeIcon
                                        className={allStyles.icon}
                                        icon={faAngleDoubleRight}
                                    />
                                </Link> :
                                <div className="custom-tooltip" data-tooltip="Add to Cart" onClick={() => dispatch(addToCart(el))}>
                                    <FontAwesomeIcon className={allStyles.icon} icon={faShoppingCart} />
                                </div>
                            }
                        </li>
                    </ul>
                </>
                }
            </div>
        </div>
    )
}