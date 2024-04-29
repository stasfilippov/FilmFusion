import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { PATH } from '../../app/App.tsx'

export const Header = () => {
  return (
    <header className={' py-1.5 mb-3'}>
      <Link className={'flex items-center gap-2.5 text-3xl text-red-400 hover:text-red-600 '} to={PATH.HOME}>
        <img className={'h-14 rounded-full'} src={logo} alt="logo" />
        <span>Film Fusion</span>
      </Link>
    </header>
  )
}
