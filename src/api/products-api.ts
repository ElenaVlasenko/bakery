import { ServerRoute } from '../const';
import { ProductListItem } from '../types';
import api from './api';

const productsApi = {
  async getList(): Promise<ProductListItem[]> {
    const { data } = await api.get<ProductListItem[]>(ServerRoute.Products);
    return data;
  },
} as const;

type ProductsApi = typeof productsApi;

export {
  productsApi,
};

export type {
  ProductsApi,
};
