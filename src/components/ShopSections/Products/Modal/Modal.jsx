import ReactDOM from "react-dom"
import allStyles from '../Modal/Modal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faAngleDoubleRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, decrement, increment } from "../../../../redux/cart/actions"
import { useEffect, useRef, useState } from "react"

export default function Modal(props) {
    const { product, hideModal } = props
    // console.log(hideModal)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const cartFind = cart.items.find(item => item.id === product.id)
    const [quantity, setQuantity] = useState(1)
    let modalRef = useRef()

    useEffect(() => {
        const handler = (e) => {
            // console.log(e.target)
            // console.log(modalRef)
            if (!modalRef.current.contains(e.target)) {
                hideModal()
                // document.body.classList.add('scroll')
            }
        }
        window.addEventListener('mousedown', handler)
        return () => {
            window.removeEventListener('mousedown', handler)
        }
    }, [modalRef])
    //  onClick={(e) => (e.target.className === `${allStyles.overlay + ' overlay'}`) ? hideModal() : null}
    // onClick={(e) => e.stopPropagation()}
    return (
        ReactDOM.createPortal(
            <div className={allStyles.overlay + ' overlay'} id="asd">
                <div className={allStyles.container + ' container'}>
                    <div className={allStyles.wrapper + ' wrapper modal-wrapper'} ref={modalRef} >
                        <div className={'w50 image ' + allStyles.image}>
                            <img src={'/images/' + `${product.image}`} alt={product.title} />
                        </div>
                        <div className="info rel w50 row f-column f-jBetween">
                            <div className={allStyles.title + ' title'}>
                                <h4>{product.title}</h4>
                            </div>
                            <div className="price">
                                <span>${product.price}</span>
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
                                                    <button type="button"
                                                        disabled={quantity === 1}
                                                        onClick={() => {
                                                            setQuantity(quantity - 1)
                                                            dispatch(decrement(product.id))
                                                        }}>-</button>
                                                    <span>{quantity}</span>
                                                    <button type="button"
                                                        onClick={() => {
                                                            setQuantity(quantity + 1)
                                                            dispatch(increment(product.id))
                                                        }}>+</button>
                                                </div>
                                                <div className="custom-tooltip"
                                                    data-tooltip="Add to Cart"
                                                    onClick={() => dispatch(addToCart(product, quantity))}>
                                                    <FontAwesomeIcon className={allStyles.icon} icon={faShoppingCart} />
                                                </div>
                                            </div>
                                        </>}
                                </div>
                            </form>
                            <div>
                                <p>Categories: <Link to='/'>Bedroom</Link> <Link to='/'>Kitchen</Link></p>
                                <p>Tags: <Link to='/'>Living room</Link> <Link to='/'>Furniture</Link> <Link to='/'>Table</Link></p>
                            </div>
                            <FontAwesomeIcon className={allStyles.closeIcon + ' remove'}
                                onClick={hideModal}
                                icon={faClose} />
                        </div>
                    </div>
                </div>
            </div>, document.getElementById('modal-root')
        )
    )
}