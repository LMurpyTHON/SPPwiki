import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import '../App.css';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div class="container">
            <form id="signup">
                <div class="header">
                    <h3>Sign Up</h3>
                    <p>You need to fill out this form</p>
                </div>
                <div class="sep"></div>
                <div class="inputs">
                    <input type="email" placeholder="E-mail" autofocus required />
                    <input type="password" placeholder="Password" required />
                    <Button type="submit" id="submit" onClick={SignUp}>SIGN UP</Button>
                </div>
            </form>
        </div>
    )
}
