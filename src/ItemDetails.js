import {useDispatch} from 'react-redux';
import {useParams, Link} from "react-router-dom";
import './ItemDetails.css';
import data from './data.json';

const ItemDetails = () => {
    const {id} = useParams();
    const {name, price, description, image_url} = data.products[id];

    const dispatch = useDispatch();
    const add = () => dispatch({type: "ADD", id: id, price: price});
    const remove = () => dispatch({type: "REMOVE", id: id, price: price});
    return (
        <div className="product-details">
            <h2 className="product-name">{name}</h2>
            <h4 className="product-price">${price}</h4>
            <img 
            className="product-image"
            alt={name} 
            src={image_url} />
            <p>{description}</p>
            <span className="buttons">
                <button
                    className="product-remove"
                    onClick={remove}>
                        <Link exact to={`/`} style={{ color:'inherit'}} className="product-remove">
                            Back
                        </Link>
                </button> 
                <button 
                className="product-add"
                onClick={add}>
                    Add To Cart
                </button>
            </span>
        </div>
    )
}
export default ItemDetails;