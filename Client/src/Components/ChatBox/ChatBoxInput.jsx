import React from 'react'

const ChatBoxInput = ({ text, setText, sendMessage }) => {
    return (
        <div className="chat-box-input-container flex">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default ChatBoxInput
