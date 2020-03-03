import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Store
import store from './App/store/store';

import { Provider } from "react-redux";

//Polyfills
import '@babel/polyfill';
import 'whatwg-fetch';

ReactDOM.render(
  <main>
    <Provider store={store}>
      <App />
    </Provider>
  </main>,
document.getElementById('root'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then((registration) => {
  			console.log('El service worker SW se ha registrado correctamente:', registration.scope);
  		}, (err) => {
  			console.log('El registro de SW ha fallado :(', err);
  		});
  	});
}