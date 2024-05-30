import { createSlice } from "@reduxjs/toolkit";
import productsData from '../data/product.json';

const productsSlice = createSlice({
    name: "productsSlice",
    initialState: {
        products: productsData,
        amountOfProductsToBuy: 0
    },
    reducers: {
        addProduct: (state) => {
            state.amountOfProductsToBuy += 1;
        }
    }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
