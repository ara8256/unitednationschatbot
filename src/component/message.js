import React from 'react';
import '../css/message.css';

const Message = ({ text, sender }) => {
    return (
        <div className={`message ${sender ? 'sender' : 'receiver'}`}>
            <div className="message-content">
                {text}
            </div>
        </div>
    );
};

export default Message;
