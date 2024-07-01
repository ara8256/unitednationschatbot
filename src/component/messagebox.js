import React, { useState } from 'react';
import Message from './message';
import '../css/messagebox.css';

const MessageBox = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello!', sender: true },
        { text: 'Hi there!', sender: false },
        { text: 'How are you?', sender: true },
        { text: 'I am good, thanks!', sender: false },
        // Add more messages here to test scrolling
        { text: 'Message 5', sender: true },
        { text: 'Message 6', sender: false },
        { text: 'Message 7', sender: true },
        { text: 'Message 8', sender: false },
        { text: 'Message 9', sender: true },
        { text: 'Message 10', sender: false },
        { text: 'Message 11', sender: true },
        { text: 'Message 12', sender: false },
    ]);

    return (
        <div className='d-flex justify-content-center' >
        <div className="message-box" style={{backgroundColor:"#f0f8ff" , borderRadius: "2vh"}}>
            {messages.map((msg, index) => (
                <Message key={index} text={msg.text} sender={msg.sender} />
            ))}
        </div>
        </div>

    );
};

export default MessageBox;
