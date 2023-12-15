import React from 'react';
import { FormGroup, FormLabel, FormControl, Row, Col } from 'react-bootstrap';

const FormInput = ({id, label, register, horizontal = false, labelSize = 2, ...props}) => {
  const onKeyDown = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
    }
  }
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
            <FormControl {...register(id)} onKeyDown={onKeyDown} {...props} />
              <FormControl.Feedback type="invalid">
                숫자만 입력 할 수 있습니다.
              </FormControl.Feedback>
          </Col>
        </FormGroup>
      ) : (
        <FormGroup controlId={`formInput${id}`}>
          <FormLabel>{label}</FormLabel>
          <FormControl {...register(id)} onKeyDown={onKeyDown} {...props} />
          <FormControl.Feedback type="invalid">
            숫자만 입력 할 수 있습니다.
          </FormControl.Feedback>
        </FormGroup>
      )}            
  </>
  )
};

export default FormInput;