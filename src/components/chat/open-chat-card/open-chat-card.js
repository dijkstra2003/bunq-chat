import React from 'react';
import './open-chat-card.css';

class OpenChatCard extends React.Component {
    render() {
        return(
            <div className="open-chat-card">
                <strong>{this.props.conversation.name}</strong><br />
            </div>
        )
    }
}

export default OpenChatCard;