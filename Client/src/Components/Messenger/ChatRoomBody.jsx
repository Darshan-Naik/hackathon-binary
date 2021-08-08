import React from 'react';
import '../../Styles/Messenger/Messenger.css';
import ChatBoxHeader from '../ChatBox/ChatBoxHeader';

const ChatRoomBody = () => {
    return (
        <div className="chat-room-main-body-header flex">
            <div className="chat-room-header-main-box">
                <ChatBoxHeader />
            </div>
            <div className="chat-room-main-body-messages scroll">
                <h1>hello</h1>
            </div>
            <div className="chat-room-main-input-box flex">
                <form className="flex">
                    <input type="text" autoFocus placeholder="Type message here..." />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatRoomBody
