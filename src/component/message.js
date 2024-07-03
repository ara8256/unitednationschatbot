import React from 'react';
import '../css/message.css';
import speakericon from "../picture/speaker.svg"
import { useState } from 'react';

const Message = ({ text, sender }) => {



    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          window.speechSynthesis.speak(utterance);
        } else {
          alert('Sorry, your browser does not support text to speech!');
        }
      };  


    return (
        <div className={`message ${sender ? 'sender' : 'receiver'}`}>
            <div className="message-content">
                {text}

                {!sender && (
                <button
                onClick={handleSpeak}
                 style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <img src={speakericon} alt="Speak" style={{ width: '24px', height: '24px' }} />
      </button>      )}         
            </div>
        </div>
    );
};

export default Message;
