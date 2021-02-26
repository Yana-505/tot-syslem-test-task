import React, {useEffect, useState} from 'react';
import './App.css';
import Dialog from "../Dialog/Dialog";
import NavBar from "../NavBar/NavBar";
import Authorization from "../Authorization/Authorization";

const App: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [loginName, setLoginName] = useState<string>('');
  const [passwordText, setPassword] = useState<string>('');

  useEffect(() => {
    const savedLogin = JSON.parse(localStorage.getItem('login') as string);
    const savedLoginName = JSON.parse(localStorage.getItem('loginName') as string);
    setLogin(savedLogin);
    setLoginName(savedLoginName);
  }, [])

  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(login));
    localStorage.setItem('loginName', JSON.stringify(loginName));
  }, [login, loginName])

  return (
    login ?
      (
        <div className="App-container">
          <>
            <NavBar/>
            <div className="container row App-content">
              <div className="col s3">Список чатиков</div>
              <div className="col s9 App-message-list">
                <Dialog nameUser={loginName} />
              </div>
            </div>
          </>
        </div>
      ) : (
        <div className="App-authorization">
          <Authorization passwordText={passwordText} setPassword={setPassword} setLogin={setLogin} loginName={loginName}
                         setLoginName={setLoginName}/>
        </div>
      )
  )
}

export default App;
