import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './login.css'
import logo from '../../assets/bunq-logo.svg';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            users: []
        }
    }
    
    componentDidMount() {
        fetch("http://assignment.bunq.com/users")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoading: false,
                    users: result
                });
            },
            (error) => {
                this.setState({
                    isLoading: false,
                    error: error
                })
            }
        )
    }

    onChange(userId) {
        console.log(userId);
        sessionStorage.setItem('userId', userId);
    }
    
    render() {
        return (
            <div className="login-wrapper">
                <div className="login">
                    <img src={logo} className="bung-logo" alt="bunq logo"></img>
                    {this.state.isLoading ? (<p>loading users....</p>) : (
                        <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                            choose a user
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.users.map((value) => {
                                return <Dropdown.Item onSelect={this.onChange} eventKey={value.id} key={value.id}>{value.name}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                    )}
                </div>
            </div>
        )
    }
}

export default Login;