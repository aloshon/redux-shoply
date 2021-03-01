import React from 'react';
import {useSelector} from 'react-redux';
import Items from './Items';

const ShoplyHome = () => {
    const inventory = useSelector(state => state.products);
    return(
        <div>
            <h1>Welcome to Shoply!</h1>
            <ul style={{listStyleType: 'none'}}>
                {Object.keys(inventory).map(id => (
                    <Items key={id} 
                    id={id}
                    name={inventory[id].name} 
                    price={inventory[id].price}/>
                ))}
            </ul>
        </div>
    )
}
export default ShoplyHome;