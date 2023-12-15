import React, { useEffect } from 'react';
import { 
  Form, Button,
  Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter } from 'react-bootstrap';
import FormInput from './FormInput';
import { useForm } from 'react-hook-form';

const FormModal = ({title, bodyText, callBackFnc, visible, onClose}) => {
  
  useEffect(() => {
    if(visible) {
      
    }
  }, [visible]);

  const {
    register,
    getValues,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: ''
  });

  return (
    <Modal 
      show={visible} 
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormInput
            id="modalValue"
            label={bodyText}
            register={register}
          />
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>
          닫기
        </Button>
        <Button variant="primary" onClick={() => {
          callBackFnc(getValues().modalValue);
        }}>
          저장
        </Button>
      </ModalFooter>
    </Modal>
  )
};
export default FormModal;