import React from "react";
import './InputMessage.css'

type InputMessageProps = {
  enterMessage(message: string): void,
  messageText: string,
  setMessageText(message: string): void,
}

const InputMessage: React.FC<InputMessageProps> = (props) => {
  const changeHandler = (enent: React.ChangeEvent<HTMLInputElement>) => {
    props.setMessageText(enent.target.value);
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.enterMessage(props.messageText);
      props.setMessageText('');
    }
  }

  const submitMessage = (message: string) => {
    props.enterMessage(message);
    props.setMessageText('');
  }

  return (
    <div className="input-field row Input-message-container">
      <input id="input-message" type={'text'} placeholder={'Введите сообщение ...'} value={props.messageText} onChange={changeHandler}
             onKeyPress={keyPressHandler}/>
      <button className="btn-floating blue lighten-2" type="submit" name="action" onClick={() => submitMessage(props.messageText)}>
        <i className="material-icons right">send</i>
      </button>
    </div>
  )
}

export default InputMessage;