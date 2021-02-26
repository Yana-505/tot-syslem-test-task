import React from 'react';
import './App.css';
import Dialog from "../Dialog/Dialog";
import NavBar from "../NavBar/NavBar";

const App: React.FC = () => {

  return (
    <div className="App-container">
      <>
        <NavBar/>
        <div className="container row App-content">
          <div className="col s3">Список чатиков</div>
          <div className="col s9 app-message-list">
            <Dialog/>
          </div>
        </div>
      </>
    </div>
  )
}

export default App;
