import rootReducerTest1 from '../pages/test1/state/rootReducer';

export const rootReducer = {
    test1: rootReducerTest1,
};
/*
rootReducer= {
    test1: {
        combineReducers({
            counter: {
                createSlice({
                    name: SLICE_NAME,
                    initialState,
                    reducers,
                });
            }
        })
    }
}
*/