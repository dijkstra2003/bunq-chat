import React from 'react';
import './open-chats.css';
import OpenChatCard from '../open-chat-card/open-chat-card';

class OpenChats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            conversations: []
        }
    }

    componentDidMount() {
        this.fetchConversations();
    }

    fetchConversations() {
        fetch("http://assignment.bunq.com/conversation/user/" + this.props.user.id)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoading: false,
                    conversations: result
                });
            },
            (error) => {
                this.setState({
                    isLoading: false,
                    conversations: error
                })
            }
        );
    }

    render() {
        return (
            <div className="open-chats">
                <div className="username">
                    <h2>{this.props.user.name}</h2>
                </div>
                {!this.state.isLoading && (
                    this.state.conversations.map((conversation, key) => {
                        return <OpenChatCard conversation={conversation.conversation} key={key}/>
                    })
                )}
            </div>
        )
    }
}

export default OpenChats;