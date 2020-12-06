import React, { useState } from 'react';
import { Form, Button, Input, FormGroup, Label } from 'reactstrap';



const RegisterComponent = (props) => {

    const [email, setEmail] = useState("");
    const [ password, setPasswrd ] = useState('');
    const [ passwordConfirm, setPasswordConfirm ] = useState('');


    const triggerEmailInputChange = (event) => setEmail(event.target.value);
    const triggerPasswordInputChange = (event) => setPasswrd(event.target.value)
    const triggerPasswordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

    const handleUserRegistration = (event) => {
        event.preventDefault();
        if (email && password) {
            if (password === passwordConfirm) {
                fetch('http://localhost:9001/users/register', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then(response => response.json())
                  .then(() => {
                      console.log("User is registered");
                      // Todo: Add login automatically
                  })
                  .catch(error => console.log(error));
            } else {
                // Todo: Tooltip instead of alert!!!
                alert('Passwords MUST match!');
            }
        }
    };


    return (
        <div id="registerForm">
            <Form onSubmit={handleUserRegistration}>
                <h3>Registration</h3>
                <FormGroup>
                    <Label htmlFor="registerEmail">Email:</Label>
                    <Input id="registerEmail" type="email" name="registerEmail" onChange={triggerEmailInputChange} value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerPassword">Password:</Label>
                    <Input id="registerPassword" type="password" name="registerPassword" onChange={triggerPasswordInputChange} value={password} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registerConfirmPassword">Password Confirm:</Label>
                    <Input id="registerConfirmPassword" type="password" name="registerConfirmPassword" onChange={triggerPasswordConfirmInputChange} value={passwordConfirm} />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </div>
    );
};

export default RegisterComponent;