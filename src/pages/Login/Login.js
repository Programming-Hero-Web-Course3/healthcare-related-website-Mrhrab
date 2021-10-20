import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { 
            signInUsingGoogle,
            handleEmailChange,
            handlePasswordChange,
            handleRegistration,
            toggleLogin,
            isLogin,
            error

                                 } = useAuth(); 
    return (
        <div id="login">
            <Container>
                <h1>Please {isLogin ? 'Login' : 'Register'}</h1>
                <Form className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" required placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" required placeholder="Password" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        <Form.Check onChange={toggleLogin} type="checkbox" label="Already Registered?" />

                    </Form.Group>
                    <Button onClick={handleRegistration} variant="primary" type="submit" className="my-2">
                        {isLogin ? 'Login' : 'Register'}
                    </Button>
                    <br />
                    
                    <br />
                    <p>OR</p>
                    
                </Form>
                <Button onClick={signInUsingGoogle} variant="primary" type="submit" className="">
                        Continue With Google
                    </Button>
            </Container>
        </div>
    );
};

export default Login;