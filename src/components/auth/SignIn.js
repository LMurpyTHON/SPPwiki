import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import "./inputs.css";
import { AuthProvider } from "../Auth";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <AuthProvider>
                <Router>
                    <div class="container">
                        <form id="signup">
                            <div class="header">
                                <h3>Sign in</h3>
                                <p>If you have an account you can sign in..</p>
                            </div>
                            <div class="sep"></div>
                            <div class="inputs">
                                <input type="email" placeholder="E-mail" autofocus required onChange={this.handleChange} />
                                <input type="password" placeholder="Password" required onChange={this.handleChange} />
                                <Button type="submit" id="submit" onSubmit={this.handleSubmit}>Login</Button>
                            </div>
                        </form>
                    </div>
                </Router>
            </AuthProvider>
        )
    }
}

export default SignIn
