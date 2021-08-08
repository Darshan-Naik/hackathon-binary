import React from 'react';
import '../../Styles/Messenger/Messenger.css';
import ChatList from './ChatList';
import ChatRoomBody from './ChatRoomBody';

const Messenger = () => {
    return (
        <div className="messenger-main-container flex">
            <div className="messenger-chat-list-box flex scroll">
                <ChatList />
            </div>
            <ChatRoomBody />
        </div>
    )
}

export default Messenger
