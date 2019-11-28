import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './login.css'
import logo from '../../assets/bunq-logo.svg';

class Login extends React.Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login">
                    <img src={logo} className="bung-logo" alt="bunq logo"></img>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            choose a user
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Wessel</Dropdown.Item>
                            <Dropdown.Item>Luc</Dropdown.Item>
                            <Dropdown.Item>Rian</Dropdown.Item>
                            <Dropdown.Item>Josh</Dropdown.Item>
                            <Dropdown.Item>Denzel</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default Login;