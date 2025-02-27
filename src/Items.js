import {useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import './Items.css';

const Item = ({id, name, price, image, quantity}) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const add = () => dispatch({type: "ADD", id: id, price: price});
    const remove = () => dispatch({type: "REMOVE", id: id, price: price});
    return (
        <li className="items">
            <Link className="item-link" exact to={`/inventory/${id}`}>
                <span className="item-image-wrapper">
                    <img className="item-image" alt={name} src={image} />
                    <h3 className="item-name">{name}</h3>
                </span>          
            </Link>
            <span className="item-hs">
            <h4 className="item-price">${price}</h4>
                <span className="quantity-buttons">
                <h3 
                    className="item-add"
                    onClick={add}>
                        +
                </h3>
                <h3
                    className="item-remove"
                    onClick={remove}>
                        -
                </h3>
                </span>
                
            </span>
            {quantity && <p><small>qty: {cart[id]}</small></p>}
        </li>
    )
}
export default Item;