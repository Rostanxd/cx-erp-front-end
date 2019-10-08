import React, {Component} from 'react';
import {TextInput, Row, Col, Button} from 'react-materialize';

import './LoginForm.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <form>
                <Row>
                    <h3>CX ERP</h3>
                </Row>
                <TextInput name="user" label="User" onChange={this.handleChange} value={this.state.user}/>
                <TextInput password name="password" label="Password" onChange={this.handleChange} value={this.state.password}/>
                <Row>
                    <Col><Button>Log In</Button></Col>
                    <Col><a className="pHref" href="www.google.com">I forgot my password...</a></Col>
                </Row>
            </form>
        );
    }
}

export default LoginForm;
