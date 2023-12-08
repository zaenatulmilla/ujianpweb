import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        if (username && password) {
        history('/home');
        } else {
        alert('Please enter both username and password');
        }
    };  

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '10rem' }}>
                <h1>Log In</h1>
                <br></br>
                <Form.Group as={Row} controlId="formUsername">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="text"
                        placeholder="Masukkan Username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control
                        type="password"
                        placeholder="Masukkan Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </Col>
                </Form.Group>
                <Button onClick={(e) => handleLogin(e)} type="button">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
