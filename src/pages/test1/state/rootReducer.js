import { combineReducers } from 'redux';

import Counter_Reducer from '../../test1/counter/state/index';

const rootReducerTest1 = combineReducers({
    counter: Counter_Reducer,
})

export default rootReducerTest1;