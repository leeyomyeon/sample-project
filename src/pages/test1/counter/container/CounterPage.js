import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormInput from '../../../components/FormInput';
import { useForm } from 'react-hook-form';

const initialValues = {
    addNum: 1
}
const CounterPage = () => {
    const dispatch = useDispatch();
    const [fieldNum, setFieldNum] = useState(1);
    const {
        register,
        getValues,
        watch
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        defaultValues: initialValues
    })

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log(">>", value, name, type);
        })
        return () => subscription.unsubscribe();
    }, [watch]);

    const number = useSelector((state) => getState(state).number);
    const inc = () => {
        dispatch(actions.increase({ data : Number(getValues().addNum) }));
    }
    const dec = () => {
        dispatch(actions.decrease({ data : Number(getValues().addNum) }));
    }
    return (
        <div>
            <Form>
                <h1>{number}</h1>
                <FormInput 
                    id="addNum"
                    label="값 입력"
                    register={register}
                    onChange={(e) => setFieldNum(e.target.value)}
                />
                <Button onClick={inc}> + {fieldNum} </Button>
                <Button onClick={dec}> - {fieldNum} </Button>
            </Form>
        </div>
    )
}

export default React.memo(CounterPage);