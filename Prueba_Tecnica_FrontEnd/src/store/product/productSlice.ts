import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../interfaces/product-interface'

export interface ProductState {
    products: Product[]
    activeProduct: Product | null
}

const initialState: ProductState = {
    products: [],
    activeProduct: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        onSetActiveProduct: (state, { payload }) => {
            state.activeProduct = payload;
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
            state.activeProduct = null;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            if (state.activeProduct) {
                state.products = state.products.filter(product => product.id !== action.payload)
                state.activeProduct = null;
            }


        },
        updateProduct: (state, action: PayloadAction<Product>) => {

          
                    state.products = state.products.map(product => {
                        if (product.id === action.payload.id) {
                            return action.payload;
                        }
                        return product;
                    });

                    state.activeProduct = null;
              
        }

    },
})

export const { setProducts, addProduct, removeProduct, updateProduct, onSetActiveProduct } = productSlice.actions

export default productSlice.reducer