import { configureStore } from '@reduxjs/toolkit';
import userSlice, { USER_SLICE_NAME } from './user-slice';
import { userApi } from '../api/user-api';
import { favoritesApi } from '../api/favorites-api';
import { productsApi } from '../api/products-api';
import productsSlice, { PRODUCTS_SLICE_NAME } from './products-slice';

const store = configureStore({
  reducer: {
    [PRODUCTS_SLICE_NAME]: productsSlice.reducer,
    [USER_SLICE_NAME]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          productsApi,
          userApi,
          favoritesApi
        },
      },
    }),
});

export default store;
