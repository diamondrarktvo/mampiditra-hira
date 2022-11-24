import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './views/Navigation';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './i18nextConf';

ReactDOM.render(
   <Provider store={store}>
      <React.StrictMode>
         <Navigation />
      </React.StrictMode>
   </Provider>,
   document.getElementById('root')
);
