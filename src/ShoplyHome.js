import React from 'react';
import {useSelector} from 'react-redux';
import Items from './Items';
import "./ShoplyHome.css";

const ShoplyHome = () => {
    const inventory = useSelector(state => state.products);
    console.log(inventory)
    return(
        <ul className="homepage-list">
            {Object.keys(inventory).map(id => (
                <Items key={id} 
                    id={id}
                    name={inventory[id].name} 
                    price={inventory[id].price}
                    image={inventory[id].image_url}/>
            ))}
        </ul>
    )
}
export default ShoplyHome;