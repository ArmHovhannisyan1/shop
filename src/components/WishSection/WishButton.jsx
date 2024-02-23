import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function WishButton() {
    const wish = useSelector(state => state.wish);
    return (
        <span className="wish-icon rel">
            <div className="wish-length">{wish.items.length}</div>
            <FontAwesomeIcon icon={faHeart} />
        </span>
    )
}