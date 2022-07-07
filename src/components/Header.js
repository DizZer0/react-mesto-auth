import React from 'react';
import logo from '../images/header-logo.svg'
import { Link } from 'react-router-dom'

function Header(props) {
  function click(e) {
    if(e.target.text === 'Выйти') {
      localStorage.removeItem('jwt')
      props.handleClickExit()
    }
  }
  return (
    <header className="header">
      <img className="logo header__logo" src={logo} alt="логотип сайта mesto russian" />
      <Link className='header__btn-navigate' onClick={click} to={props.url}>{props.title}</Link>
    </header>
  )
}

export default  Header