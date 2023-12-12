import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import serviceWorker from './serviceWorker';
import createStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
            <Provider store={indexStore}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}


serviceWorker();