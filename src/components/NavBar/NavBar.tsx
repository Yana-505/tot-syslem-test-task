import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

type NavBarProps = {
  setLogin(login: boolean): void,
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [activeLi, setActiveLi] = useState(0);

  const logout = () => {
    props.setLogin(false);
  }

  return (
    <>
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <ul className="hide-on-med-and-down">
            <li className={activeLi === 0 ? "active" : ""} onClick={() => setActiveLi(0)}><NavLink to="/"><i
              className="material-icons left">message</i>Рабочие вопросы</NavLink></li>
            <li className={activeLi === 1 ? "active" : ""} onClick={() => setActiveLi(1)}><NavLink to="/flood"><i
              className="material-icons left">message</i>Общение</NavLink>
            </li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>
              <a onClick={logout} className="waves-effect waves-light btn">
                Выход
                <i className="material-icons right">exit_to_app</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;