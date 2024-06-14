import { ADD_PRODUCT } from './actions'; // Импорт ADD_PRODUCT

import productsData from '../data/product.json';

const initialState = {
    products: productsData,
    productsInCart: []
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                return {
                    ...state,
                    productsInCart: [...state.productsInCart, product]
                };
            }
            return state;
        default:
            return state;
    }
};