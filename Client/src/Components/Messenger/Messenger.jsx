import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import '../../Styles/Messenger/Messenger.css';
import { url } from '../../Utils/serverUrl';
import ChatRoomBody from './ChatRoomBody';
import ChatRoomCard from './ChatRoomCard';

const Messenger = ({ socket }) => {

    const [chatRooms, setChatRooms] = useState([]);
    const [currentChat, setCurrentChat] = useState({});

    const isAuth = useSelector(state => state.auth.isAuth);
    const { id } = useParams();

    const getChatRooms = () => {
        return axios.get(url + `/chatbox/${id}`)
            .then((res) => {
                setChatRooms(res.data.data);
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    useEffect(() => {

        getChatRooms();
        socket && socket.on(`newMessage`, (data) => {
            if (data.mentor === id || data.student === id) {
                getChatRooms();
            }
        });

    }, [socket]);

    useEffect(() => {
        setCurrentChat(chatRooms[0] || {});
    }, [chatRooms])

    if (!isAuth) {
        return <Redirect to="/login" />
    }


    return (
        <div className="messenger-main-container flex">
            <div className="messenger-chat-list-box flex scroll">
                <div className="chat-list-main-container">
                    {
                        chatRooms.map((item, i) => <ChatRoomCard key={i} {...item} setCurrentChat={setCurrentChat} />)
                    }
                </div>
            </div>
            <ChatRoomBody {...currentChat} socket={socket} getChatRooms={getChatRooms} />
        </div>
    )
}

export default Messenger
