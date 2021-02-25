import React, {useState} from "react";
import './InputMessage.css'

type InputMessageProps = {
  enterMessage(message: string): void
}

const InputMessage: React.FC<InputMessageProps> = (props) => {
  const [messageText, setMessageText] = useState<string>('')

  const changeHandler = (enent: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(enent.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.enterMessage(messageText)
      setMessageText('')
    }
  }

  const submitMessage = (message: string) => {
    props.enterMessage(message)
    setMessageText('')
  }

  return (
    <div className="input-field row">
      <input id="input-message" type={'text'} placeholder={'Введите сообщение ...'} value={messageText} onChange={changeHandler}
             onKeyPress={keyPressHandler}/>
      <button className="btn-floating blue lighten-2" type="submit" name="action" onClick={() => submitMessage(messageText)}>
        <i className="material-icons right">send</i>
      </button>
    </div>
  )
}

export default InputMessage;