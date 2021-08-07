import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../Styles/ChatBox/ChatBox.css';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxInput from './ChatBoxInput';
import Messages from './Messages';

const ChatBox = ({ mentor, student, author, name, profilePic, setChatBoxVisibility }) => {

    const [text, setText] = useState("");
    const [allMessages, setAllMessages] = useState([]);

    const getMessages = () => {
        return axios.get(`http://localhost:8000/chatbox?sender=${student}&receiver=${mentor}`)
            .then((res) => {
                setAllMessages(res.data.data);
                setText("");
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    const sendMessage = () => {
        const payload = {
            mentor,
            student,
            name,
            authorId: student,
            time: new Date(),
            text
        }

        axios.post('http://localhost:8000/chatbox', payload)
            .then((res) => {
                getMessages();
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    useEffect(() => {
        getMessages();
    }, [mentor, student])

    return (
        <div className="chat-box-main-container flex">
            <ChatBoxHeader name={author} profilePic={profilePic} setChatBoxVisibility={setChatBoxVisibility} />
            <div className="chat-box-message-container scroll">
                {
                    allMessages.length > 0 && (
                        allMessages.map(item => <Messages {...item} key={item.id} student={student} />)
                    )
                }
            </div>
            <ChatBoxInput text={text} setText={setText} sendMessage={sendMessage} />
        </div>
    )
}

export default ChatBox
