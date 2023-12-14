import React from 'react';
import { FormGroup, FormLabel, FormControl, Row, Col } from 'react-bootstrap';

const FormInput = ({id, label, register, horizontal = false, labelSize = 2, ...props}) => {
    return (
        <>
            {/* 
                FormGroup controlId = HTML에서 Element의 ID임
                FormControl register를 등록해두면 
                useForm에 의해 값을 가져올 수 있음.
            */}
            {
                horizontal ? (
                    <FormGroup controlId={`formInput${id}`} as={Row} >
                        <FormLabel column sm={labelSize}>
                        {label /* 제목 */}
                        </FormLabel>
                        <Col>
                            <FormControl {...register(id)} {...props} />
                        </Col>
                    </FormGroup>
            ) : (
                <FormGroup controlId={`formInput${id}`}>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl {...register(id)} {...props} />
                </FormGroup>
            )}            
        </>
    )
};

export default FormInput;