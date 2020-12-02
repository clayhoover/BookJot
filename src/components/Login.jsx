import React, { useState } from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap'; 


const LoginComponent = (props) => {

    console.log(props.authenticateUser);

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const triggerEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const triggerPasswrodInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            fetch('http://localhots:8080/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }).then((response) => response.json())
            .then((body) => {
                props.authenticateUser(body.token);
            })
                .catch((error) => console.log(error));
        }
    };

    return (
     <Form onSubmit={handleLoginSubmit}>
         <div id="wrapper">
          <h3>Login:</h3>
         <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input onChange={triggerEmailInputChange} value={email} id="email" type="email" name="email" />
         </FormGroup>
         <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input onChange={triggerPasswrodInputChange} value={password} id="password" type="password" name="password" />
         </FormGroup>
         <Button>
             Login
         </Button>
         </div>
     </Form>
    );
};



export default LoginComponent;
