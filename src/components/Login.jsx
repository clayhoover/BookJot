import React from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap'; 

const LoginComponent = () => {
    return (
     <Form>
         <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" name="email" />
         </FormGroup>
         <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input id="password" type="password" name="password" />
         </FormGroup>
         <Button>
             Login
         </Button>
     </Form>
    );
};



export default LoginComponent;





