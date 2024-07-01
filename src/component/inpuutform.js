
import React from 'react';
import "../css/input.css"
const ChatInput = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mx-auto mt-3" style={{ maxWidth: "25%", borderRadius: "5vh", outlineStyle: "solid" }}>
        <div style={{ flexGrow: 1 }}>
            <input
                type="text"
                className="form-control border-0"
                placeholder="Message"
                style={{ background: "none", border: "none", width: "100%", fontSize: "2vh", outline: "none" }}
            />
        </div>
        <div>
            <button className="send-button" style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    </div>
    );
};

export default ChatInput;
