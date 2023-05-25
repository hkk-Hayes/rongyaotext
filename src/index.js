import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./content.css"
import "./Footer.css"
import App from './router/index';
// import axios from "axios"
import 'lib-flexible'
// import qinxuan from './img/1.jpg'
import './font/iconfont.css'
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store';
//持久化处理
import { persistor } from './store'
import { PersistGate } from 'redux-persist/lib/integration/react';


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate >
//     </Provider>
    
//   </React.StrictMode>, document.querySelector('#root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

reportWebVitals();
