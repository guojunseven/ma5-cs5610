import { render } from 'react-dom';
import React from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';

// I have used Redux to manage state and do actions in this assignment
const store = createStore(reducer);

render(<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));

