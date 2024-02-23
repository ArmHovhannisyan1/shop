import { Link } from 'react-router-dom';
import allStyles from './Wish.module.css';

export default function WishItem({ item, index, onRemove, onAddCart,cart }) {
    return (
        <tr key={index}>
            <td onClick={onRemove} className="remove">x</td>
            <td className={'image ' + allStyles.image}>
                <img src={'/images/' + item.image} alt="" />
            </td>
            <td>{item.title}</td>
            <td>{item.price}$</td>
            <td>In Stock</td>
            <td>
                {(cart.items.find(pr => pr.id === item.id)) ? <Link className="btn" to='/cart'>View Cart</Link> : <button className="btn" onClick={onAddCart}>Add to cart</button>}
            </td>
        </tr>
    )
}