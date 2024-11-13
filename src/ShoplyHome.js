import React from 'react';
import {useSelector} from 'react-redux';
import Items from './Items';
import "./ShoplyHome.css";

const ShoplyHome = () => {
    const inventory = useSelector(state => state.products);
    return(
        <ul className="homepage-list">
            {Object.keys(inventory).map(id => (
                <Items key={id} 
                    id={id}
                    name={inventory[id].name} 
                    price={inventory[id].price}/>
            ))}
        </ul>
    )
}
export default ShoplyHome;