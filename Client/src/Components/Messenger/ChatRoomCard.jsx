import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/Messenger/Messenger.css';
import { url } from '../../Utils/serverUrl';

const ChatRoomCard = ({ authors, setCurrentChat, messages }) => {

    const [userDetails, setUserDetails] = useState({});
    const user = useSelector(state => state.auth.user);

    const getUser = (id) => {
        axios.get(url + "/mentors/" + id)
            .then((res) => {
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

    useEffect(() => {

        const x = authors.filter(item => item !== user._id)[0];
        getUser(x);

    }, [])

    return (
        <div className="chat-list-content-box flex" onClick={() => setCurrentChat({ authors, messages })}>
            <div className="chat-list-user-image-wrapper">
                <img src={userDetails.profilePic || process.env.PUBLIC_URL + '/Images/userProfile_icon.png'} alt="user" />
            </div>
            <div className="chat-list-user-details">
                <h1>{userDetails.name}</h1>
                <small>{userDetails.email}</small>
            </div>
        </div>
    )
}

export default ChatRoomCard
