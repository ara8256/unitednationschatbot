
import React from 'react';
import "../css/input.css"
const ChatInput = () => {
    return (
        <div className="d-flex align-item-center p-1 bg-light mx-auto w-25" style={{borderRadius:"5vh", outlineStyle:"solid"}}>
            <input
                type="text"
                className="p-1"
                placeholder="Message"
                style={{background:"none", border: 'none',flexGrow:"1", fontSize:"2vh", outline:"none"}}
            />
            <button className="send-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    );
};

export default ChatInput;
