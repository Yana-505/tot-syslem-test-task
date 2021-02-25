import React, {useState} from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import InputMessage from "../InputMessage/InputMessage";
import MessageList from "../MessageList/MessageList";
import {IMessage} from "../../interfaces";

const App: React.FC = () => {

  const [messages, setMessages] = useState<IMessage[]>([])

  const enterMessage = (message: string) => {
    if (message !== '') {
      const newMessage: IMessage ={
        messageText: message,
        name: 'User',
        id: Date.now()
      }
      setMessages(prev => [...prev, newMessage])
    }
  }

  const removeMessage = (id: number) => {
    setMessages(prev => prev.filter(message => message.id !== id))
  }

  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col s3">Список чатиков</div>
          <div className="col s9 app-message-list">
            <MessageList messages={messages} removeMessage={removeMessage}/>
            <InputMessage enterMessage={enterMessage}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
