import allStyles from './Cart.module.css';

export default function CartItem({ item, onRemove, onDecrement, onIncrement }) {
    return (
        <tr>
            <td className={allStyles.image}>
                <img src={'/images/' + item.image} alt="" />
            </td>
            <td>{item.title}</td>
            <td>{item.price}$</td>
            <td className={'white ' + allStyles.controlQuantity}>
                <button type="button" disabled={item.quantity === 1 ? true : false} onClick={onDecrement}>-</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={onIncrement}>+</button>
            </td>
            <td>{item.price * item.quantity}$</td>
            <td className="remove" onClick={onRemove}>x</td>
        </tr>
    )
}