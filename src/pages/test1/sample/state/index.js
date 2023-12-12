import { createSlice, createAction } from '@reduxjs/toolkit';

const ROOT_SLICE_NAME = 'test1';
const SLICE_NAME = 'sample';

const initialState = {
    number: 0,
}

const sagaAction = {
    increase : createAction(`${SLICE_NAME}/increase`),
    decrease : createAction(`${SLICE_NAME}/decrease`),
};

const reducers = {
    initState: () => initialState,
    setValue: {
        reducer: (state, { payload : { key, value }}) => {
            state[key] = value;
        },
        prepare: (key, value) => {
            return { payload : {key, value} };
        }
    },
    increase: (state, { payload }) => {
        state.number += payload;
    },
    decrease: (state, { payload }) => {
        state.number -= payload;
    }
}

const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers,
});
export const getState = (state) => state[ROOT_SLICE_NAME][SLICE_NAME];
export const actions = {
    ...slice.actions,
    ...sagaAction,
}
export default slice.reducer;