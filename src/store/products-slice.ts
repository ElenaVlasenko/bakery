import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { ProductListItem } from '../types';
import { createSelector } from 'reselect';
import { ProductsApi } from '../api/products-api';
import { sampleSize } from 'lodash';
import { DISPLAYED_PRODUCTS_NUMBER_STEP } from '../const';

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

type ProductsState = {
  products: ProductListItem[];
  displayedProductsNumber: number;
}

const initialState: ProductsState = {
  products: [],
  displayedProductsNumber: DISPLAYED_PRODUCTS_NUMBER_STEP,
};

export const PRODUCTS_SLICE_NAME = 'products';
const MAIN_PAGE_PRODUCTS_NUMBER = 3;

const productsSlice = createSliceWithThunks({
  name: PRODUCTS_SLICE_NAME,
  initialState,
  selectors: {
    selectRandomProducts: createSelector(
      [
        (state: ProductsState) => state.products,
      ],
      (products) => sampleSize(products, MAIN_PAGE_PRODUCTS_NUMBER)
    ),
    selectDisplayedProducts: createSelector(
      [
        (state: ProductsState) => state.products,
        (state: ProductsState) => state.displayedProductsNumber,
      ],
      (products, displayedProductsNumber) => products.slice(0, displayedProductsNumber)
    ),
  },
  reducers: (create) => ({
    increaseDisplayedProductsNumber: create.reducer((state) => {
      state.displayedProductsNumber = Math.min(state.products.length, state.displayedProductsNumber + DISPLAYED_PRODUCTS_NUMBER_STEP);
    }),
    resetDisplayedProductsNumber: create.reducer((state) => {
      state.displayedProductsNumber = DISPLAYED_PRODUCTS_NUMBER_STEP;
    }),
    fetchProductsAction: create.asyncThunk<ProductListItem[], undefined, { extra: { productsApi: ProductsApi } }>(
      async (_arg, { extra: { productsApi } }) => productsApi.getList().catch((err) => {
        throw err;
      }),
      {
        fulfilled: (state, action) => {
          const { payload: products } = action;
          state.products = products;
        },
      }
    ),
  }),
});

export default productsSlice;

export const {
  selectDisplayedProducts,
  selectRandomProducts
} = productsSlice.selectors;

export const {
  fetchProductsAction,
  increaseDisplayedProductsNumber
} = productsSlice.actions;
