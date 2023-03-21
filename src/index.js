import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContactsMainScreen from './ContactsMainScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <ContactsMainScreen />
  </Provider>
  </React.StrictMode>
);

