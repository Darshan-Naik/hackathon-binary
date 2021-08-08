import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/Messenger/Messenger.css';
import { url } from '../../Utils/serverUrl';
import ChatBoxHeader from '../ChatBox/ChatBoxHeader';
import Messages from '../ChatBox/Messages';

const ChatRoomBody = ({ authors, messages, socket, getChatRooms }) => {

    const [text, setText] = useState("");
    const [userDetails, setUserDetails] = useState({});
    const user = useSelector(state => state.auth.user);

    const scroll = useRef();

    const getUser = (id) => {
        axios.get(url + "/mentors/" + id)
            .then((res) => {
                console.log(res.data.data);
                if (res.data.data) {
                    setUserDetails(res.data.data)
                } else {
                    axios
                        .get(url + "/students/" + id)
                        .then((res) => {
                            setUserDetails(res.data.data)
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const sendMessage = (e) => {
        e.preventDefault();

        const payload = {
            mentor: userDetails._id,
            student: user._id,
            name: user.name,
            authorId: user._id,
            time: new Date(),
            text
        }

        axios.post(url + '/chatbox', payload)
            .then((res) => {
                socket.emit('message', payload);
                setText("")
                getChatRooms();
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    useEffect(() => {

        const x = authors && authors.filter(item => item !== user._id)[0];
        x && getUser(x);

    }, [authors])

    useEffect(() => {
        scroll.current.scroll(0, 200000);
    }, [messages]);


    return (
        <div className="chat-room-main-body-header flex">
            <div className="chat-room-header-main-box">
                <ChatBoxHeader {...userDetails} />
            </div>
            <div className="chat-room-main-body-messages scroll" ref={scroll}>
                <div className="chat-box-message-container scroll">
                    {messages &&
                        messages.map((item) => (
                            <Messages {...item} key={item.id} student={user._id} />
                        ))}
                </div>
            </div>
            <div className="chat-room-main-input-box flex">
                <form className="flex" onSubmit={sendMessage}>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" autoFocus placeholder="Type message here..." />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatRoomBody
