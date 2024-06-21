import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchProductsAction } from './store/products-slice';
import { checkAuthAction } from './store/user-slice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchProductsAction());
store.dispatch(checkAuthAction());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
