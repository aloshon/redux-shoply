import React from 'react';
import {useSelector} from 'react-redux';
import Items from './Items';
import './Cart.css';

const Cart = () => {
    const inCart = useSelector(state => state.cart);
    const inventory = useSelector(state => state.products);
    const quantity = useSelector(state => state.cartQty);
    const total = useSelector(state => state.total);
    // const quantity = true;
    
    // Return empty cart text if cart is empty
    if(Object.keys(inCart).length === 0){
        return (
            <div className="cart-container">
                <h1>Shopping Cart</h1>
                <h2>No items in cart...</h2>
            </div>
        )
    }
    return(
        <div className="cart-container">
            <h1 className="checkout">Shopping Cart</h1>
            <ul className="cart-list">
                {Object.keys(inCart).map(id => (
                    <Items key={id} 
                    id={id}
                    name={inventory[id].name} 
                    price={inventory[id].price}
                    quantity={quantity}/>
                ))}
                <h3>Total Due: ${total}</h3>
            </ul>
        </div>
    )
}
export default Cart;