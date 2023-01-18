import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction, fetchPromoFilm, getFavoriteFilmsAction } from './store/api-action';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilm());
store.dispatch(checkAuthAction());
store.dispatch(getFavoriteFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
