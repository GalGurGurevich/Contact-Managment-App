import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContactsMainScreen from './pages/ContactsMainScreen';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <ContactsMainScreen />
  </Provider>
  </React.StrictMode>
);

