import React from 'react';
import './chat.css';
import OpenChats from './open-chats/open-chats';
import ActiveChat from './active-chat/active-chat';

class Chat extends React.Component {

    render() {
        return(
            <div className="chat-wrapper">
                <OpenChats />
                <ActiveChat />
            </div>
        )
    }

}

export default Chat;