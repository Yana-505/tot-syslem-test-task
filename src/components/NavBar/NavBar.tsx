import React from "react";

const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <ul className="hide-on-med-and-down">
            <li><a href="/"><i className="material-icons left">message</i>Рабочие вопросы</a></li>
            <li><a href="/"><i className="material-icons left">message</i>Общение</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar;