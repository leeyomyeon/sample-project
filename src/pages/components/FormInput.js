import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

const FormInput = ({id, label, ...props}) => {
    
    return (
        <FormGroup controlId={id}>
            <FormLabel>
                {label}
            </FormLabel>
            <FormControl {...props} />
        </FormGroup>
    )
};

export default FormInput;