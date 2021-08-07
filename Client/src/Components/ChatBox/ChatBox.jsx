import React from 'react';
import '../../Styles/ChatBox/ChatBox.css';
import ChatBoxHeader from './ChatBoxHeader';
import ChatBoxInput from './ChatBoxInput';

const ChatBox = ({ receiverId, name, profilePic }) => {
    return (
        <div className="chat-box-main-container flex">
            <ChatBoxHeader name={name} profilePic={profilePic} />
            <div className="chat-box-message-container scroll">
                <h1>hello</h1>
            </div>
            <ChatBoxInput />
        </div>
    )
}

export default ChatBox
