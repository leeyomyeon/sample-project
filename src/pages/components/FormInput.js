import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const FormInput = ({id, label, register, ...props}) => {
    
    return (
        <FormGroup controlId={id}>
            <FormLabel>
                {label}
            </FormLabel>
            <FormControl {...register(id)} {...props} />
        </FormGroup>
    )
};

export default FormInput;