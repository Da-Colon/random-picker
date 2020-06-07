import React from 'react'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <div className="h-16 w-full bg-teal-900 text-white text-2xl flex justify-between">
      <img className="w-48" alt="Logo" src={logo} />
      <div className="self-center">
        <span className="mx-4">Login</span>|
        <span className="mx-4">Registar</span>
      </div>

    </div>
  )
}
