import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import './Items.css';

const Item = ({id, name, price, quantity}) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const add = () => dispatch({type: "ADD", id: id, price: price});
    const remove = () => dispatch({type: "REMOVE", id: id, price: price});
    return (
        <li className="item">
            <Link exact to={`/inventory/${id}`} style={{ color:'inherit'}}>
                <h3 className="item-name">{name}</h3>
                <h4 className="item-price">${price}</h4>
            </Link>
            <span className="item-buttons">
                <button
                className="item-remove"
                onClick={remove}>
                    Remove
                </button>
                <button 
                className="item-add"
                onClick={add}>
                    Add To Cart
                </button>
            </span>
            {quantity && <p><small>qty: {cart[id]}</small></p>}
        </li>
    )
}
export default Item;