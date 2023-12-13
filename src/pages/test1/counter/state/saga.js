import { all, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';

function* fetchInitialInfo() {
    yield put(actions.setInitialInfo());
}

function* getList({ payload }) {
    alert(`getList : ${payload}`);
    yield put(actions.setValue('number', 1000));
}

export function* watchUnsplash() {
    yield all([
        takeLatest(actions.fetchInitialInfo, fetchInitialInfo),
        takeLatest(actions.getList, getList),
    ]);
}