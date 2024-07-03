// import React from 'react';
// import '../css/message.css';
// import speakericon from "../picture/speaker.svg"
// import { useState } from 'react';

// const Message = ({ text, sender, language }) => {



//     const handleSpeak = () => {
//         if ('speechSynthesis' in window) {
//             console.log(12345, language)
//           const utterance = new SpeechSynthesisUtterance(text);
//         utterance.lang= language;
//           window.speechSynthesis.speak(utterance);
//         } else {
//           alert('Sorry, your browser does not support text to speech!');
//         }
//       };  


//     return (
//         <div className={`message ${sender ? 'sender' : 'receiver'}`}>
//             <div className="message-content">
//                 {text}

//                 {!sender && (
//                 <button
//                 onClick={handleSpeak}
//                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
//         <img src={speakericon} alt="Speak" style={{ width: '24px', height: '24px'}} />
//       </button>      )}         
//             </div>
//         </div>
//     );
// };

// export default Message;



import React from 'react';
import '../css/message.css';
import speakericon from "../picture/speaker.svg";

const Message = ({ text, sender, language }) => {
    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language;
            console.log(utterance.lang);
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
                    <button onClick={handleSpeak} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        <img src={speakericon} alt="Speak" style={{ width: '24px', height: '24px' }} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Message;
