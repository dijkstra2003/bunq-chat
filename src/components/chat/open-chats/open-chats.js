import React from 'react';
import './open-chats.css';
import OpenChatCard from '../open-chat-card/open-chat-card';

class OpenChats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="open-chats">
                <div className="username">
                    <h2>{this.props.user.name}</h2>
                </div>
                <OpenChatCard />
            </div>
        )
    }
}

export default OpenChats;