import { ServerRoute } from '../const';
import { ProductListItem } from '../types';
import api from './api';

const favoritesApi = {
  async getList(): Promise<ProductListItem[]> {
    const { data } = await api.get<ProductListItem[]>(ServerRoute.Favorites);
    return data;
  },

  async changeIsFavorite(id: string, isFavorite: boolean): Promise<ProductListItem & { isFavorite: boolean }> {
    const { data } = await api.post<ProductListItem & { isFavorite: boolean }>(`${ServerRoute.Favorites}/${id}/${isFavorite ? 1 : 0}`);
    return data;
  }

} as const;

type FavoritesApi = typeof favoritesApi;

export {
  favoritesApi,
};

export type {
  FavoritesApi,
};
