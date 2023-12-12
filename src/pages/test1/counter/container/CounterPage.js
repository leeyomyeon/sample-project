import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FormInput from '../../../components/FormInput';
import { useForm } from 'react-hook-form';

const CounterPage = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => getState(state).number);

    const inc = () => {
        dispatch(actions.increase(3));
    }
    const dec = () => {
        dispatch(actions.decrease(3));
    }
    return (
        <div>
            <Container>
            </Container>
            <h1>{number}</h1>
            <FormInput 
                id="addNum"
                label="값 입력"
            />
            <Button onClick={inc}> + 1 </Button>
            <Button onClick={dec}> - 1 </Button>
        </div>
    )
}

export default React.memo(CounterPage);