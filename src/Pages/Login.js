import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import '../App.css';

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div class="container">
            <form id="signup">
                <div class="header">
                    <h3>Sign in</h3>
                    <p>If you have an account you can sign in..</p>
                </div>
                <div class="sep"></div>
                <div class="inputs">
                    <input type="email" placeholder="E-mail" autofocus required />
                    <input type="password" placeholder="Password" required />   
                    <Button type="submit" id="submit">Login</Button>
                </div>
            </form>
        </div>
    )
}
