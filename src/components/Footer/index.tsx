import React from 'react'
import './style.scss'



const Footer = () => {

  const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();


  return (
    <footer className='footer'>
    <div className='footer-content'>

      <span>© Copyright 2022-{anoAtual} - All Rights Reserved</span>
    </div>
    </footer>
  )
}

export default Footer