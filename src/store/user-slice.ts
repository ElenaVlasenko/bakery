import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { SignUpParams, ProductListItem, User, AuthParams } from '../types';
import { getToken } from '../api/token';
import { UserApi } from '../api/user-api';
import { showErrorMessage } from './error-slice';
import { FavoritesApi } from '../api/favorites-api';

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

type UserState = {
  user: User | null;
  token: string | null;
  isUserDataLoading: boolean;
  favorites: ProductListItem[];
}

const initialState: UserState = {
  user: null,
  token: getToken(),
  isUserDataLoading: false,
  favorites: [],
};

export const USER_SLICE_NAME = 'user';

const userSlice = createSliceWithThunks({
  name: USER_SLICE_NAME,
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectFavorites: (state) => state.favorites,
    selectIsUserDataLoading: (state) => state.isUserDataLoading,
    selectAuthorizationStatus: (state) => {
      if (state.user) {
        return AuthorizationStatus.Auth;
      }

      if (state.token) {
        return AuthorizationStatus.Unknown;
      }

      return AuthorizationStatus.NoAuth;
    },
  },
  reducers: (create) => ({
    signUpAction: create.asyncThunk<User, SignUpParams, { extra: { userApi: UserApi } }>(
      (authData, { extra: { userApi }, dispatch }) => userApi.signUp(authData).catch((err) => {
        showErrorMessage(err, dispatch);
        throw err;
      }),
      {
        pending: (state) => {
          state.isUserDataLoading = true;
        },
        fulfilled: (state, action) => {
          state.user = action.payload;
          state.isUserDataLoading = false;
        },
        rejected: (state) => {
          state.isUserDataLoading = false;
        },
      }
    ),
    loginAction: create.asyncThunk<User, AuthParams, { extra: { userApi: UserApi } }>(
      (authData, { extra: { userApi }, dispatch }) => userApi.login(authData).catch((err) => {
        showErrorMessage(err, dispatch);
        throw err;
      }),
      {
        pending: (state) => {
          state.isUserDataLoading = true;
        },
        fulfilled: (state, action) => {
          state.user = action.payload;
          state.isUserDataLoading = false;
        },
        rejected: (state) => {
          state.isUserDataLoading = false;
        },
      }
    ),
    logoutAction: create.asyncThunk<void, undefined, { extra: { userApi: UserApi } }>(
      (_arg, { extra: { userApi }, dispatch }) => userApi.logout().catch((err) => {
        showErrorMessage(err, dispatch);
        throw err;
      }),
      {
        fulfilled: (state) => {
          state.user = null;
          state.token = null;
        },
      }
    ),
    checkAuthAction: create.asyncThunk<{ user: User | null; favorites: ProductListItem[] }, undefined, { extra: { userApi: UserApi; favoritesApi: FavoritesApi } }>(
      async (_arg, { extra: { userApi, favoritesApi }, getState, dispatch }) => {
        const state = getState() as { user: UserState };

        if (!state.user.token) {
          return { user: null, favorites: [] };
        }
        const user = await userApi.getAuthorizedUser().catch((err) => {
          showErrorMessage(err, dispatch);
          throw err;
        });
        const favorites = await favoritesApi.getList().catch((err) => {
          showErrorMessage(err, dispatch);
          throw err;
        });

        return { user, favorites };
      },
      {
        fulfilled: (state, action) => {
          const { payload: { user, favorites } } = action;
          state.user = user;
          state.favorites = favorites;
          state.isUserDataLoading = false;

        },
        pending: (state) => {
          state.isUserDataLoading = true;
        },
        rejected: (state) => {
          state.isUserDataLoading = false;
          state.token = null;
        },
      }
    ),
  }),
});

export default userSlice;

export const {
  selectAuthorizationStatus,
  selectUser, selectFavorites,
  selectIsUserDataLoading,
} = userSlice.selectors;

export const {
  signUpAction,
  loginAction,
  logoutAction,
  checkAuthAction,
} = userSlice.actions;
