import React from 'react'
import logo from '../../assets/logo2.png'

export const Header = () => {
  return (
    <header className={'flex items-center justify-between'}>
      <img className={'h-14'} src={logo} alt="logo" />
      <ul>
        <li>
          <a href="#">Movies</a>
        </li>
      </ul>
      <button>LOG IN</button>
    </header>
  )
}
