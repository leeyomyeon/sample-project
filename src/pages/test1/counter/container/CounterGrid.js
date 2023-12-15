import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { Form, Button, Table } from 'react-bootstrap';
import FormInput from 'pages/components/FormInput';
import { useForm } from 'react-hook-form';

const initialValues = {
    addNum: 1
}
const CounterGrid = () => {
    const dispatch = useDispatch();
    const [fieldNum, setFieldNum] = useState(1);
    const {
        register,
        getValues,
        setValue,
        watch
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onChange",
        defaultValues: initialValues
    })
    const [validate, setValidate] = useState(false);

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
    const onChange = (e) => {
        const regex = /[^0-9]/g;
        if(regex.test(e.target.value)) {
            setValidate(true);
            setTimeout(() => {
                setValidate(false);
            }, 2000)
        }
        const res = e.target.value.replace(regex,'');
        setFieldNum(res);
        setValue('addNum', res);
    }

    return (
        <Form>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td colSpan={2} align='center'>
                            <h1>{number}</h1>
                        </td>
                    </tr>
                    <tr style={{ height: '80px'}}>
                        <td colSpan={2}>
                            <FormInput
                                id="addNum"
                                label="값 입력"
                                register={register}
                                horizontal={true}
                                onChange={onChange}
                                isInvalid={validate}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align='center'>
                            <Button onClick={dec}> - {fieldNum} </Button>
                        </td>
                        <td align='center'>
                            <Button onClick={inc}> + {fieldNum} </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Form>
    )
}
export default CounterGrid;