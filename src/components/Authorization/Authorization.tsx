import React, {useState} from "react";

type AuthorizationProps = {
  loginName: string,
  setLoginName(message: string): void,
  setLogin(login: boolean): void,
}

const Authorization: React.FC<AuthorizationProps> = (props) => {
  const [password, setPassword] = useState<string>('');

  const changeNameHandler = (enent: React.ChangeEvent<HTMLInputElement>) => {
    props.setLoginName(enent.target.value);
  }

  const changePasswordHandler = (enent: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(enent.target.value);
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const loginName = props.loginName.replace(/\s+/g, ' ').trim();
      if (password === '123' && loginName !== '') {
        props.setLogin(true)
      }
    }
  }

  return (
    <>
      <div className="input-field col s6">
        <p>Логин</p>
        <input type={'text'} placeholder={'Введите логин'} value={props.loginName}
               onChange={changeNameHandler} onKeyPress={keyPressHandler}/>
      </div>
      <div className="input-field col s6">
        <p>Пароль</p>
        <input type={'password'} placeholder={'Введите пароль'} value={password}
               onChange={changePasswordHandler}
               onKeyPress={keyPressHandler}/>
      </div>
    </>
  )
}

export default Authorization;