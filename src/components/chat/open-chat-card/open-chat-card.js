import React from 'react';
import './open-chat-card.css';

class OpenChatCard extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        sessionStorage.setItem('conversationId', this.props.conversation.id);

        var oldConversationId = this.props.conversation.id;

        return setTimeout(function() {
            if(sessionStorage.getItem('conversationId') === oldConversationId) {
                window.dispatchEvent(new Event('refresh'));
            }
        }, 50);
    }

    render() {
        return(
            <div className="open-chat-card"  onClick={this.onClick}>
                <strong>{this.props.conversation.name}</strong><br />
            </div>
        )
    }
}

export default OpenChatCard;