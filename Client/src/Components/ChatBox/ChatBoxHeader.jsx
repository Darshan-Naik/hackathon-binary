import React from 'react';
import { ReactComponent as CloseIcon } from '../../Icons/close.svg';

const ChatBoxHeader = ({ name, profilePic }) => {
    return (
        <div className="chat-box-header-main-container flex">
            <div className="flex">
                <div className="chat-box-header-image">
                    <img src={profilePic || process.env.PUBLIC_URL + '/Images/userProfile_icon.png'} alt="user" />
                </div>
                <div className="chat-box-user-details flex">
                    <h4>{name}</h4>
                </div>
            </div>
            <div className="chat-box-header-icon flex">
                <CloseIcon />
            </div>
        </div>
    )
}

export default ChatBoxHeader
