import React from "react";

type AuthorizationProps = {
  passwordText: string,
  setPassword(message: string): void,
  loginName: string,
  setLoginName(message: string): void,
  setLogin(login: boolean): void,
}

const Authorization: React.FC<AuthorizationProps> = (props) => {

  const changeNameHandler = (enent: React.ChangeEvent<HTMLInputElement>) => {
    props.setLoginName(enent.target.value);
  }

  const changePasswordHandler = (enent: React.ChangeEvent<HTMLInputElement>) => {
    props.setPassword(enent.target.value);
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const loginName = props.loginName.replace(/\s+/g, ' ').trim();
      if (props.passwordText === '123' && loginName !== '') {
        props.setLogin(true)
      }
    }
  }

  return (
    <>
      <div className="input-field col s6">
        <p>Логин</p>
        <input id="input-message" type={'text'} placeholder={'Введите логин'} value={props.loginName}
               onChange={changeNameHandler} onKeyPress={keyPressHandler}/>
      </div>
      <div className="input-field col s6">
        <p>Пароль</p>
        <input id="input-message" type={'password'} placeholder={'Введите пароль'} value={props.passwordText}
               onChange={changePasswordHandler}
               onKeyPress={keyPressHandler}/>
      </div>
    </>
  )
}

export default Authorization;