import { rootSagaTest1 } from 'pages/test1/state/rootSaga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        ...rootSagaTest1,
    ])
}

export default rootSaga;
/*
rootSaga() {
    yield all([
        rootSagaTest1: {
            yield all([
                takeLatest(actions.fetchInitialInfo, fetchInitialInfo),
                takeLatest(actions.getList, getList),
            ]);
        },
    ])
}
*/