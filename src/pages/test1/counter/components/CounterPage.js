import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';

const CounterPage = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => getState(state).number);
    const inc = () => {
        dispatch(actions.increase());
    }
    const dec = () => {
        dispatch(actions.decrease());
    }
    return (
        <div>
            <h1>숫자 {number}</h1>
            <button onClick={inc}> + 1 </button>
            <button onClick={dec}> - 1 </button>
        </div>
    )
}

export default React.memo(CounterPage);