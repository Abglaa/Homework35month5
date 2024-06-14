export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = id => ({
    type: ADD_PRODUCT,
    payload: id
});