import { createStore } from 'redux';
import { productsReducer } from './reducer';

export const store = createStore(productsReducer);