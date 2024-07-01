import React from 'react';
import "../css/input.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatInput = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-3">
                    <div className="d-flex align-items-center justify-content-between" style={{ borderRadius: "5vh", border: "1px solid #ccc", padding: "0.5rem"}}>
                        <input
                            type="text"
                            className="form-control flex-grow-1 no-outline"
                            placeholder="Message"
                            style={{ background: "none", border: "none", fontSize: "1rem" }}
                        />
                        <button className="send-button btn btn-link p-0 ml-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
