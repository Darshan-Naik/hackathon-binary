import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../Styles/ChatBox/ChatBox.css';
import { url } from '../../Utils/serverUrl';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxInput from './ChatBoxInput';
import Messages from './Messages';

const ChatBox = ({ socket, mentor, student, author, name, profilePic, setChatBoxVisibility }) => {

    const [text, setText] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const scroll = React.useRef();
    React.useEffect(() => {
        scroll.current.scroll(0, 200000);
    }, [allMessages]);
    const getMessages = () => {
        return axios.get(url + `/chatbox?sender=${student}&receiver=${mentor}`)
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

        axios.post(url + '/chatbox', payload)
            .then((res) => {
                socket.emit('message', payload);
                getMessages();
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    useEffect(() => {

        socket && socket.on(`newMessage`, (data) => {
            getMessages();
        });

    }, [socket]);

    useEffect(() => {
        getMessages();
    }, [mentor, student])

    return (
        <div className="chat-box-main-container flex">
            <ChatBoxHeader
                name={author}
                profilePic={profilePic}
                setChatBoxVisibility={setChatBoxVisibility}
            />
            <div className="chat-box-message-container scroll" ref={scroll}>
                {allMessages.length > 0 &&
                    allMessages.map((item) => (
                        <Messages {...item} key={item.id} student={student} />
                    ))}
            </div>
            <ChatBoxInput text={text} setText={setText} sendMessage={sendMessage} />
        </div>
    );
}

export default ChatBox
