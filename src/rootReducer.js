import data from './data.json';

const INITIAL_STATE = {
    products: data.products,
    cart: {},
    total: 0.00,
    cartQty: 0
}

function rootReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case 'ADD': {
            const cartCopy = {...state.cart};
            if(cartCopy[action.id]){
                cartCopy[action.id] += 1
            }else{
                cartCopy[action.id] = 1
            }
            state.total += action.price;
            // Round the total to the nearest 2nd decimal
            state.total = +state.total.toFixed(2);
            state.cartQty += 1;
            return {...state, cart: cartCopy}
        };
        case 'REMOVE':{
            if (!state.cart[action.id]) return state;
            const cartCopy = {...state.cart};
            // This means that the quantity is 1 before removing
            // Instead of leaving item in cart with quantity of 0
            if(cartCopy[action.id] === 1){
                delete cartCopy[action.id];
            }else{
                cartCopy[action.id] -= 1
            }
            state.total -= action.price;
            // Round the total to the nearest 2nd decimal
            state.total = +state.total.toFixed(2);
            
            state.cartQty -= 1;
            return {...state, cart: cartCopy}
        };
        default:
            return state;
    }
}
export default rootReducer;