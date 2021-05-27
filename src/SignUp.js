import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="SignUp">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button type="submit" className="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="Already?!">
                Already have an account ?! Log In
            </div>
        </div>
    )
}
