import { combineReducers } from 'redux';

import counter_Reducer from '../../test1/counter/state/index';
// import Sample_Reducer from '../../test1/sample/state/index';

const rootReducerTest1 = combineReducers({
    counter: counter_Reducer,
    // sample: Sample_Reducer,
})

export default rootReducerTest1;