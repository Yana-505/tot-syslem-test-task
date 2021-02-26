import React, {useEffect} from "react";
import {IMessage} from "../../interfaces";
import './MessageList.css'

type MessageListProps = {
  messages: IMessage[],
  removeMessage(id: number): void,
  editMessage(message: number): void,
}

const MessageList: React.FC<MessageListProps> = ({messages, removeMessage, editMessage}) => {

  const listRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef?.current?.scroll(0, listRef.current.scrollHeight);
  }, [messages]);

  return (
    <div ref={listRef} className="Message-list">
      {messages.length === 0 ? (<p className="center">
          Сообщений нет
        </p>) :
        messages.map(message => {
          return (
            <div className="message">
              <div>
                <p className="Name-user">{message.name}</p>
                <span>{message.messageText}</span>
              </div>
              {message.type === 'my' ? (
                <div className="Message-list-icons">
                  <i className="material-icons prefix cursor-pointer" onClick={() => editMessage(message.id)}>edit</i>
                  <i className="material-icons prefix cursor-pointer"
                     onClick={() => removeMessage(message.id)}>delete</i>
                </div>
              ) : null}
            </div>
          )
        })}
    </div>
  )
}

export default MessageList;