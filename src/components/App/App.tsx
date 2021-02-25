import React, {useState} from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import InputMessage from "../InputMessage/InputMessage";
import MessageList from "../MessageList/MessageList";
import {IMessage} from "../../interfaces";

const App: React.FC = () => {

  const [messages, setMessages] = useState<IMessage[]>([])
  const [messageText, setMessageText] = useState<string>('')

  const [inEdit, setEdit] = useState<number>(0)

  const enterMessage = (message: string) => {
    const newMessage = message.replace(/\s+/g, ' ').trim();
    if (newMessage == null || newMessage === '') return;
    if (inEdit !== 0) {
      const editingMessageIndex = messages.findIndex((m) => m.id === inEdit);
      const editingMessage = messages[editingMessageIndex];
      if (editingMessage == null) return;
      if (editingMessage.messageText === messageText) return;
      const newMessage: IMessage = {
        messageText: messageText,
        name: 'User',
        id: inEdit
      }
      const newMessages = [...messages];
      newMessages.splice(editingMessageIndex, 1, newMessage);
      setMessages(newMessages);
      setEdit(0)
    } else {
      const newMessage: IMessage = {
        messageText: message,
        name: 'User',
        id: Date.now()
      }
      setMessages(prev => [...prev, newMessage]);
    }
  }

  const removeMessage = (id: number) => {
    setMessages(prev => prev.filter(message => message.id !== id));
  }

  const editMessage = (messageId: number) => {
    const editingMessage = messages.find((m) => m.id === messageId);
    if (editingMessage == null) return;
    setMessageText(editingMessage.messageText)
    setEdit(editingMessage.id)
  }

  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col s3">Список чатиков</div>
          <div className="col s9 app-message-list">
            <MessageList messages={messages} removeMessage={removeMessage} editMessage={editMessage}/>
            <InputMessage enterMessage={enterMessage} messageText={messageText} setMessageText={setMessageText}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
