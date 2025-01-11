import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { CustomCursor } from './components/ui/customCursor';
import { Preloader } from './components/ui/preloader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <CustomCursor />
      <Preloader />
    </Provider>
  </React.StrictMode>
);

