import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { Form, Button, Stack } from 'react-bootstrap';
import FormInput from '../../../components/FormInput';
import { useForm } from 'react-hook-form';

const CounterApiGrid = () => {
    const dispatch = useDispatch();
    const {
        register,
        getValues,
        watch
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        defaultValues: ''
    })
    const onSubmit = () => {
        const apiKey = getValues().apiKey
        dispatch(actions.getList(apiKey));
    }
    useEffect(() => {
        // 콘솔에 출력
        const subscription = watch((value, { name, type }) => {
            console.log(">>", value, name, type);
        })
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <Stack gap={2}>
            <div className="p-2">
                <Form>
                    <FormInput
                        id="apiKey"
                        label="API Key"
                        horizontal={true}
                        labelSize={1}
                        register={register}
                    />
                </Form>
            </div>
            <div align='center'>
                <Button onClick={onSubmit}>
                    조회
                </Button>
            </div>
        </Stack>
    )
}
export default CounterApiGrid;