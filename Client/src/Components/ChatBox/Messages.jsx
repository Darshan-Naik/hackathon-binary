import React from 'react';

const Messages = ({ text, time, authorId, name, student }) => {

    return (
        <div className={student == authorId ? "sent message" : "received message"}>
            <p>{text}</p>
            <small>{name}</small>
        </div>
    )
}

export default Messages
