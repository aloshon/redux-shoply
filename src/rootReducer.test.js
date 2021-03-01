import rootReducer from './rootReducer';
import data from './data.json';
import {useSelector} from 'react-redux';

describe('root reducers', () => {
    it('should return the initial state', () => {
      expect(rootReducer(undefined, {})).toEqual({
            products: data.products,
            cart: {},
            total: 0.0,
            cartQty: 0
        })
    })

    it('should return the new state', () => {
        const state = rootReducer(undefined, {
            type: "ADD", 
            id: "47314fa1-ae56-4eae-80be-af6691145951", 
            price: 219.99});
        expect(state).toEqual({
              products: data.products,
              cart: {"47314fa1-ae56-4eae-80be-af6691145951": 1},
              total: 219.99,
              cartQty: 1
          })
      })
})