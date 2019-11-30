import React from 'react';
import './chat.css';
import OpenChats from './open-chats/open-chats';
import ActiveChat from './active-chat/active-chat';

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            isLoading: true
        }

    }

    componentDidMount() {
        fetch("http://assignment.bunq.com/user/" + sessionStorage.getItem('userId'))
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoading: false,
                    user: result
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

    render() {
        return(
            !this.state.isLoading && (
                <div className="chat-wrapper">
                    <OpenChats user={this.state.user} />
                    <ActiveChat />
                </div>
            )
        )
    }

}

export default Chat;