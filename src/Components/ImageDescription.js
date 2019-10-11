import React, {useState} from "react";
import {    Button,
            Modal,
            ModalHeader,
            ModalBody,
            ModalFooter,
            FormGroup,
            Label,
            Input,
            Form} from 'reactstrap';

// let newDate = document.getElementsByClassName("form-control").value;
const ImageDescription = props => {
let [newDate, setNewDate] = useState('');
      return (
        <div>
          <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
            <ModalBody>
            {props.description}
            </ModalBody>
            <ModalFooter>
                <Form>
                    <FormGroup>
                        <Label for="exampleDate">Select another photo!</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                        />
                    </FormGroup>
                    {console.log(newDate)}
                    <Button color="primary" onClick={()=>props.setDate(newDate)}>Let's Go!</Button>{' '}
                </Form>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  

export default ImageDescription;