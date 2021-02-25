import React from "react";
import {IMessage} from "../../interfaces";
import './MessageList.css'

type MessageListProps = {
  messages: IMessage[],
  removeMessage(id: number): void,
  editMessage(message: number): void,
}

const MessageList: React.FC<MessageListProps> = ({messages, removeMessage, editMessage}) => {
  return (
    <div >
      {messages.map(message => {
        return(
          <div className="message">
            <div>
              <p className="Name-user">{message.name}</p>
              <span>{message.messageText}</span>
            </div>
            <div>
              <i className="material-icons prefix cursor-pointer" onClick={() => editMessage(message.id)}>edit</i>
              <i className="material-icons prefix cursor-pointer" onClick={() => removeMessage(message.id)}>delete</i>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MessageList;