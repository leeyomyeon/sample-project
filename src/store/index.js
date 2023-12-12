import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
let reducers = null;
let sagas = null;
const createStore = async () => {
    reducers = await import('./rootReducer').then((value) => combineReducers(value.default));
    sagas = await import('./rootSaga').then((value) => combineReducers(value.default));

    function* rootSaga() {
        yield sagas;
    }

    const store = configureStore({
        reducer : reducers,
        devTools : true,
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);

    return store;
}

export default createStore;