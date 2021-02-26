import React, {useEffect, useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import NavBar from "../NavBar/NavBar";
import Authorization from "../Authorization/Authorization";
import FloodPage from "../Page/FloodPage";
import WorkPage from "../Page/WorkPage";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [login, setLoginName] = useState<string>('');

  useEffect(() => {
    if (!loggedIn) {
      setLoginName('');
    }
  }, [loggedIn])

  useEffect(() => {
    const savedLogin = JSON.parse(localStorage.getItem('loggedIn') as string);
    const savedLoginName = JSON.parse(localStorage.getItem('login') as string);
    setLoggedIn(savedLogin);
    setLoginName(savedLoginName);
  }, [])

  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    localStorage.setItem('login', JSON.stringify(login));
  }, [loggedIn, login])

  return (
    loggedIn ?
      (
        <div className="App-container">
          <BrowserRouter>
            <NavBar setLogin={setLoggedIn}/>
            <div className="container row App-content">
              <Route path="/" exact>
                <WorkPage loginName={login}/>
              </Route>
              <Route path="/flood">
                <FloodPage loginName={login}/>
              </Route>
            </div>
          </BrowserRouter>
        </div>
      ) : (
        <div className="App-authorization">
          <Authorization setLogin={setLoggedIn} loginName={login} setLoginName={setLoginName}/>
        </div>
      )
  )
}

export default App;
