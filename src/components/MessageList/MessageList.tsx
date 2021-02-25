import React from "react";
import {IMessage} from "../../interfaces";
import './MessageList.css'

type MessageListProps = {
  messages: IMessage[],
  removeMessage(id: number): void
}

const MessageList: React.FC<MessageListProps> = ({messages, removeMessage}) => {
  return (
    <div >
      {messages.map(message => {
        return(
          <div className="message">
            <div>
              <p className="Name-user">{message.name}</p>
              <span>{message.messageText}</span>
            </div>
            <i className="material-icons prefix" onClick={() => removeMessage(message.id)}>delete</i>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList;