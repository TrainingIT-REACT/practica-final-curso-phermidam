import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store
import store from './App/store/store';

import { Provider } from "react-redux";

//Polyfills
import '@babel/polyfill';

ReactDOM.render(
  <main>
    <Provider store={store}>
      <App />
    </Provider>
  </main>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    	navigator.serviceWorker.register('/sw.js').then((registration) => {
    		console.log('El service worker SW se ha registrado correctamente: ', registration.scope);
  		}, (err) => {
  			console.error('El registro de SW ha fallado.', err);
  		});
  	});
}