import React from 'react'
import Bouton from '../../components/bouton/bouton';
import './header.css';

export const Header = () => {
  return (
    <>
      <div className='header'>
        <h1 className='h1'>PLAN2SPORT</h1>
        <div className='boutons-container'>
          <Bouton titre='Inscription' classe='btn inscription' />
          <Bouton titre='Se connecter' classe='btn seConnecter' />
        </div>
      </div>
    </>
  )
}

export default Header;