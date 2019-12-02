import React from 'react';
import './active-chat.css';
import Button from 'react-bootstrap/Button';

class ActiveChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conversationId: sessionStorage.getItem('conversationId'),
            inputValue: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        window.addEventListener('refresh', () =>  {
            this.refreshActiveChat();
        });
    }

    refreshActiveChat() {
        this.setState({ 
            conversationId: sessionStorage.getItem('conversationId')
        })

        this.fetchMessages();
    }
    
    fetchMessages() {
        fetch("http://assignment.bunq.com/conversation/" + this.state.conversationId + "/message/limited?limit=30&offset=0")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    messages: result.reverse()
                });
                this.scrollToLastMessage();
            },
            (error) => {
                this.setState({
                    messages: error
                })
            }
        );
    }

    scrollToLastMessage() {
        this.scrollEnd.scrollIntoView();
    }

    onInputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    sendMessage(e) {
        e.preventDefault();
        fetch("http://assignment.bunq.com/conversation/" + this.state.conversationId + "/message/send", {
            method: 'POST',
            body: JSON.stringify({
                message: this.state.inputValue,
                senderId: sessionStorage.getItem('userId')
            })
        })
        .then(
            this.fetchMessages()
        )
        .then(
            this.setState({inputValue: ''})
        );
    }

    render() {
        return(
            <div className="active-chat">
                <div className="chat-message">
                    <div className="messages">
                        {this.state.messages && (
                            this.state.messages.map((message) => {
                                if(message.senderId === sessionStorage.getItem('userId')) {
                                    return  <div className="chat-message-right" key={message.id}>{message.message}</div>
                                } else {
                                    return <div className="chat-message-left" key={message.id}>{message.message}</div> 
                                }
                            })
                        )}
                        <div className="scrollEnd" ref={(el) => { this.scrollEnd = el; }}></div>
                    </div>
                </div>
                <div className="input-container">
                    <form onSubmit={this.sendMessage}>
                        <input type="text" placeholder="send a message..." onChange={this.onInputChange} value={this.state.inputValue}></input>
                        <Button variant="secondary" onClick={this.sendMessage}>send</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ActiveChat;