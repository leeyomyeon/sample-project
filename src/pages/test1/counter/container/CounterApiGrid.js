import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, getState } from '../state';
import { Form, Button, Stack, Card, CardImg, CardBody, CardText, CardTitle } from 'react-bootstrap';
import FormInput from 'pages/components/FormInput';
import { useForm } from 'react-hook-form';
import pakeWeekend from '../bin/pakeWeekend.png';

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
            <div align={'center'}>
                <Card style={{ width: '18rem' }}>
                    <CardImg variant="top" src={pakeWeekend} />
                    <CardBody>
                        <CardTitle>
                            이미지 테스트
                        </CardTitle>
                        <CardText>
                            헐 벌써 주말이라니 거짓말같아. <br />
                            당연함.<br /> 거짓말임
                        </CardText>
                        <Button variant="primary">확인</Button>
                    </CardBody>
                </Card>
            </div>
        </Stack>
    )
}
export default CounterApiGrid;