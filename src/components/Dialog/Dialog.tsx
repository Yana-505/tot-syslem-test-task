import React, {useEffect, useState} from "react";
import './Dialog.css'
import {IMessage} from "../../interfaces";
import MessageList from "../MessageList/MessageList";
import InputMessage from "../InputMessage/InputMessage";

type DialogProps = {
  nameUser: string,
  dialogId: string,
}

const Dialog: React.FC<DialogProps> = ({ nameUser, dialogId }) => {
  const [messages, setMessages] = useState<IMessage[]>(() => {
    // read
    const dialogIdSaved = localStorage.getItem(dialogId);
    if (dialogIdSaved != null) {
      try {
        return JSON.parse(dialogIdSaved);
      } catch (e) {
        localStorage.removeItem(dialogId);
        return require('./messages.json').messages[dialogId] ?? [];
      }
    } else {
      return require('./messages.json').messages[dialogId] ?? [];
    }
  });

  const [messageText, setMessageText] = useState<string>('');
  const [inEdit, setEdit] = useState<number>(0);

  useEffect(() => {
    // write
    localStorage.setItem(dialogId, JSON.stringify(messages));
  }, [messages, dialogId]);

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
        name: nameUser,
        type: 'my',
        id: inEdit
      }
      const newMessages = [...messages];
      newMessages.splice(editingMessageIndex, 1, newMessage);
      setMessages(newMessages);
      setEdit(0)
    } else {
      const newMessage: IMessage = {
        messageText: message,
        name: nameUser,
        type: 'my',
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
    setMessageText(editingMessage.messageText);
    setEdit(editingMessage.id);
  }

  return (
    <>
      <MessageList messages={messages} removeMessage={removeMessage} editMessage={editMessage}/>
      <InputMessage enterMessage={enterMessage} messageText={messageText} setMessageText={setMessageText}/>
    </>
  );
}

export default Dialog;