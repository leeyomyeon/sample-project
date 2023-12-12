import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import serviceWorker from './serviceWorker';
import createStore from './store';

let indexStore = null;
const container = document.getElementById('root');
const root = createRoot(container);

createStore().then((store) => {
    indexStore = store;
    // axiosConfig.setupInterceptors(store);
    render();
})

const render = () => {
    root.render(
        <Provider store={indexStore}>
            <App />
        </Provider>
    );
}


serviceWorker();