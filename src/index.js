import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//made a common store to which every component has access
import {createStore} from 'redux';

//to pass store to each component as props
import {Provider} from 'react-redux';
import rootReducer from './reducers';
const store=createStore(rootReducer);
console.log(store);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

