export enum AppRoute {
  Main = '/',
  Catalog = '/Catalog',
  Login = '/logIn',
  Favorites = '/Favorites',
  NotFound = '/404',
  Registration = '/SignUp',
  ErrorPage = '/ErrorPage',
  ProductPage = '/ProductPage',
  // Id = ':id',
}

export enum PageRoute {
  Main = AppRoute.Main,
  Registration = AppRoute.Registration,
  Login = AppRoute.Login,
  Catalog = AppRoute.Catalog,
  // MyList = AppRoute.MyList,
  // Film = `${AppRoute.Films}${AppRoute.Id}`,
  // FilmComment = `${AppRoute.Films}${AppRoute.Id}${AppRoute.FilmReview}`,
  // Player = `${AppRoute.Player}${AppRoute.Id}`
}

export enum ServerRoute {
  Products = '/products',
  LogIn = '/users/login',
  Categories = '/categories',
  Reviews = '/reviews',
  LastReview = '/reviews/getLast',
  Registration = '/users/registration',
  Avatar = '/users/upload',
  Logout = '/users/logout',
  Favorites = '/favorites'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const DISPLAYED_PRODUCTS_NUMBER_STEP = 6;


