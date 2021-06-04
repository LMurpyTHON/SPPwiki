import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import "./inputs.css";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
            <div class="container">
            <form id="signup">
                <div class="header" onSubmit={this.handleSubmit}>
                    <h3>Don't have an acc. ?!</h3>
                    <p>Create one ;))</p>
                </div>
                <div class="sep"></div>
                <div class="inputs">
                    <input type="email" placeholder="E-mail" id="email" autofocus required onChange={this.handleChange}/>
                    <input type="password" placeholder="Password" id="password" required onChange={this.handleChange}/>
                    <input type="text" placeholder="FirstName" required id="FirstName" className="firstname" onChange={this.handleChange} />  
                    <input type="text" placeholder="LastName" required id="LastName" className="lastname" onChange={this.handleChange} />
                    <Button type="submit" id="submit" onSubmit={this.handleSubmit}>Sign Up</Button>
                </div>
            </form>
        </div>
        )
    }
}

export default SignUp
