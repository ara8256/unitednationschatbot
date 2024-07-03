// import React, { useState, useEffect, useRef } from 'react';
// import SelectableItem from './items';
// import '../css/itemlist.css';
// import humanrights from "../picture/humanrights.png";
// import who from "../picture/who.jpeg";
// import charter from "../picture/charter.jpeg";
// import securityconsil from "../picture/securityconcil.jpeg";
// import escosc from "../picture/Ecosoc.png";
// import law from "../picture/international_law.jpeg";
// import icj from "../picture/icj.png";
// import member from "../picture/membersun.jpeg";
// import general from "../picture/general_assmbly.png";
// import ChatInput from './inpuutform';
// import MessageBox from './messagebox';
// import axios from 'axios';
// import LanguageDropdown from './languages';


// const ItemList = () => {
//     const items = [
//         { id: 1, name: 'Security Concil', image: securityconsil },
//         { id: 2, name: 'World Health Organization', image: who },
//         { id: 3, name: 'United Nations Charter', image: charter },
//         { id: 4, name: 'International Court of Justice', image: icj },
//         { id: 5, name: 'Members of UN', image: member },
//         { id: 6, name: 'Economic and Social Council', image: escosc },
//         { id: 7, name: 'Rules of general assembly ', image: general },
//         // { id: 8, name: 'human Rights', image: humanrights },
//         { id: 9, name: 'International Law', image: law },
//     ];
  
//     const messageRef = useRef(null);

//     const api = ["sec_B2VjICMT2HfKg5KPZsY9yiNhMIddSRwX","sec_iKqjUWZlARwiiefXK4WrbetJzvyzZWWy","sec_B2VjICMT2HfKg5KPZsY9yiNhMIddSRwX","sec_XZvK6SEbegstMFhymP97jS69ytgcqLwx","sec_XZvK6SEbegstMFhymP97jS69ytgcqLwx","sec_XZvK6SEbegstMFhymP97jS69ytgcqLwx","sec_B2VjICMT2HfKg5KPZsY9yiNhMIddSRwX","sec_BMxkO2hJCIIygnXJBpkOitQK1sueyGcY","sec_BMxkO2hJCIIygnXJBpkOitQK1sueyGcY"]
//     const source_key = ["src_UOoUQ15kLDTEQLDNJOANL","src_3vLXAYFzNMZyuzJrhUoKr","src_iSCeb58Yv0a7czrRHQNsc","src_Ey6AzBVNatUkNpXbugLbq","src_LfREqxvEzfWqbk1wwePDK","src_Eaj0S27tTIFR4OKn7J7wm","src_YTy6HMOYzDFo1Tgi4Myff","src_XJyUN41lLcEbaqHfyKOfs","src_yvFR1a8zcVX5WJAyG9ibX"]
//     const [selectedItemId, setSelectedItemId] = useState(null);
//     const [text, setText] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [responseMessage, setResponseMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [translatedmessage, settranslatedmessage] = useState('')
//     const [languagevalue,setlanguagevalue] = useState('en')



//     const handleClick = (id) => {
//         setSelectedItemId(id);
//         if (messageRef.current) {
//             messageRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleSendMessage = (message) => {
//         setText(message);
//         const newMessage = { text: message, sender: true, language: languagevalue };
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };



//     const handlelanguage = (language) =>{
        
//         setlanguagevalue(language);
//         console.log(language);

//     }

//     const handleSendMessageApi1 = (api ,sourceid) => {
//         const config = {
//             headers: {
//                 "x-api-key": api,
//                 "Content-Type": "application/json",
//             },
//         };

//         const data = {
//             sourceId: sourceid,
//             messages: [
//                 {
//                     role: "user",
//                     content: text,
//                 },
//             ],
//         };

//         axios
//             .post("https://api.chatpdf.com/v1/chats/message", data, config)
//             .then((response) => {
//                 // setResponseMessage(response.data.content)
//                 if (languagevalue !== 'en'){
//                 languagetranslator(response.data.content,languagevalue)}
//                 else{
//                 setResponseMessage(response.data.content); // Clear any previous errors
//                 }
//             })
//             .catch((error) => {
//                 setErrorMessage(error.message);
//                 if (error.response) {
//                     console.error("Error response data:", error.response.data);
//                 }
//             });
//     };


//     const languagetranslator = async (text_1, language) => {
//         const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
//         const options = {
//             method: 'POST',
//             headers: {
//                 'x-rapidapi-key': '8544686e32msh14f36d4ab71f129p116e42jsncec99aae12b5',
//                 'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 from: 'en',
//                 to: language,
//                 text: text_1,
//             })
//         };
    
//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setResponseMessage(result.trans) // Parse JSON response
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     // const fetchLanguages = async () => {
//     //     const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/support-languages';
//     //     const options = {
//     //         method: 'GET',
//     //         headers: {
//     //             'x-rapidapi-key': '8544686e32msh14f36d4ab71f129p116e42jsncec99aae12b5',
//     //             'x-rapidapi-host': 'google-translate113.p.rapidapi.com'
//     //         }
//     //     };

//     //     try {
//     //         const response = await fetch(url, options);
//     //         const result = await response.json(); // Parse JSON response
//     //         console.log(result)
//     //     } catch (error) {
//     //         // setError(error);
          
//     //     }
//     // };



//     const sendtoapi = (selectedItemId) => {
//         handleSendMessageApi1(api[selectedItemId-1], source_key[selectedItemId-1]);
//         // fetchLanguages()
//     };







//   // Call the function (you can use this in an event handler or a useEffect)

  
//   // Call the function (you can use this in an event handler or a useEffect)

  

//     useEffect(() => {
//         if (messages.length > 0) {
//             sendtoapi(selectedItemId);
//         }
//     }, [text]);


//     useEffect(() => {
//         if (messages.length > 0) {
//             const newResponseMessage = { text: responseMessage, sender: false };
//             setMessages((prevMessages) => [...prevMessages, newResponseMessage]);
//         }
//     }, [responseMessage]);


//     useEffect(() => {
//         setMessages([]); 
//         if (selectedItemId !== null && messageRef.current) {
//             messageRef.current.scrollIntoView({ behavior: 'smooth' });
//         }

//         // Clear the messages array
//     }, [selectedItemId]);

//     return (
//         <>
//             <div className="container item-list">
//                 <div className="row mb-4">
//                     <div className="col-12">
//                         <h2>Explore Our Chatbots: Select a Chatbot and Ask Your Query with United Nations Expertise</h2>
//                     </div>
//                 </div>
//                 <div className="row justify-content-center">
//                     {items.slice(0, 4).map((item) => (
//                         <div key={item.id} className="col-6 col-md-4 col-lg-2 p-5">
//                             <SelectableItem
//                                 item={item}
//                                 onClick={handleClick}
//                                 isSelected={selectedItemId === item.id}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="row justify-content-center">
//                     {items.slice(4).map((item) => (
//                         <div key={item.id} className="col-6 col-md-4 col-lg-2 p-5">
//                             <SelectableItem
//                                 item={item}
//                                 onClick={handleClick}
//                                 isSelected={selectedItemId === item.id}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {selectedItemId && (
//                 <div ref={messageRef}>
//                     <LanguageDropdown onSelectLanguage = {handlelanguage}/>
//                     <MessageBox messages={messages} />
//                     <ChatInput onSendMessage={handleSendMessage} />
//                                 </div>
//             )}
//         </>
//     );
// };

// export default ItemList;



import React, { useState, useEffect, useRef } from 'react';
import SelectableItem from './items';
import '../css/itemlist.css';
import humanrights from "../picture/humanrights.png";
import who from "../picture/who.jpeg";
import charter from "../picture/charter.jpeg";
import securityconsil from "../picture/securityconcil.jpeg";
import escosc from "../picture/Ecosoc.png";
import law from "../picture/international_law.jpeg";
import icj from "../picture/icj.png";
import member from "../picture/membersun.jpeg";
import general from "../picture/general_assmbly.png";
import ChatInput from './inpuutform';
import MessageBox from './messagebox';
import axios from 'axios';
import LanguageDropdown from './languages';

const ItemList = () => {
    const items = [
        { id: 1, name: 'Security Concil', image: securityconsil },
        { id: 2, name: 'World Health Organization', image: who },
        { id: 3, name: 'United Nations Charter', image: charter },
        { id: 4, name: 'International Court of Justice', image: icj },
        { id: 5, name: 'Members of UN', image: member },
        { id: 6, name: 'Economic and Social Council', image: escosc },
        { id: 7, name: 'Rules of general assembly ', image: general },
        // { id: 8, name: 'human Rights', image: humanrights },
        { id: 9, name: 'International Law', image: law },
    ];

    const messageRef = useRef(null);

    const api = ["sec_B2VjICMT2HfKg5KPZsY9yiNhMIddSRwX","sec_iKqjUWZlARwiiefXK4WrbetJzvyzZWWy","sec_B2VjICMT2HfKg5KPZsY9yiNhMIddSRwX","sec_XZvK6SEbegstMFhymP97jS69ytgcqLwx","sec_XZvK6SEbegstMFhymP97jS69ytgcqLwx","sec_XZvK6SEbegstMFhymP97jS69ytgcqLwx","sec_B2VjICMT2HfKg5KPZsY9yiNhMIddSRwX","sec_BMxkO2hJCIIygnXJBpkOitQK1sueyGcY","sec_BMxkO2hJCIIygnXJBpkOitQK1sueyGcY"]
    const source_key = ["src_UOoUQ15kLDTEQLDNJOANL","src_3vLXAYFzNMZyuzJrhUoKr","src_iSCeb58Yv0a7czrRHQNsc","src_Ey6AzBVNatUkNpXbugLbq","src_LfREqxvEzfWqbk1wwePDK","src_Eaj0S27tTIFR4OKn7J7wm","src_YTy6HMOYzDFo1Tgi4Myff","src_XJyUN41lLcEbaqHfyKOfs","src_yvFR1a8zcVX5WJAyG9ibX"]
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [translatedmessage, settranslatedmessage] = useState('')
    const [languagevalue, setlanguagevalue] = useState('en');

    const handleClick = (id) => {
        setSelectedItemId(id);
        if (messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSendMessage = (message) => {
        setText(message);
        const newMessage = { text: message, sender: true, language: languagevalue };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    const handlelanguage = (language) => {
        setlanguagevalue(language);
        console.log(language);
    };

    const handleSendMessageApi1 = (api, sourceid) => {
        const config = {
            headers: {
                "x-api-key": api,
                "Content-Type": "application/json",
            },
        };

        const data = {
            sourceId: sourceid,
            messages: [
                {
                    role: "user",
                    content: text,
                },
            ],
        };

        axios
            .post("https://api.chatpdf.com/v1/chats/message", data, config)
            .then((response) => {
                if (languagevalue !== 'en') {
                    languagetranslator(response.data.content, languagevalue);
                } else {
                    setResponseMessage(response.data.content); // Clear any previous errors
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
                if (error.response) {
                    console.error("Error response data:", error.response.data);
                }
            });
    };

    const languagetranslator = async (text_1, language) => {
        const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '8544686e32msh14f36d4ab71f129p116e42jsncec99aae12b5',
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'en',
                to: language,
                text: text_1,
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setResponseMessage(result.trans); // Parse JSON response
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    const sendtoapi = (selectedItemId) => {
        handleSendMessageApi1(api[selectedItemId - 1], source_key[selectedItemId - 1]);
    };

    useEffect(() => {
        if (messages.length > 0) {
            sendtoapi(selectedItemId);
        }
    }, [text]);

    useEffect(() => {
        if (responseMessage) {
            const newResponseMessage = { text: responseMessage, sender: false, language: languagevalue };
            setMessages((prevMessages) => [...prevMessages, newResponseMessage]);
        }
    }, [responseMessage]);

    useEffect(() => {
        setMessages([]);
        if (selectedItemId !== null && messageRef.current) {
            messageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedItemId]);

    return (
        <>
            <div className="container item-list">
                <div className="row mb-4">
                    <div className="col-12">
                        <h2>Explore Our Chatbots: Select a Chatbot and Ask Your Query with United Nations Expertise</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {items.slice(0, 4).map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-2 p-5">
                            <SelectableItem
                                item={item}
                                onClick={handleClick}
                                isSelected={selectedItemId === item.id}
                            />
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center">
                    {items.slice(4).map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-2 p-5">
                            <SelectableItem
                                item={item}
                                onClick={handleClick}
                                isSelected={selectedItemId === item.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedItemId && (
                <div ref={messageRef}>
                    <LanguageDropdown onSelectLanguage={handlelanguage} />
                    <MessageBox messages={messages} />
                    <ChatInput onSendMessage={handleSendMessage} />
                </div>
            )}
        </>
    );
};

export default ItemList;
