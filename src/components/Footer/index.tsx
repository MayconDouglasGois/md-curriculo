import {FaFilePdf} from 'react-icons/fa'
import './style.scss'



const Footer = () => {

  const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();


  return (
    <footer className='footer'>
    <div className='footer-content'>

      <a href="curriculo.pdf" download><FaFilePdf/> Download PDF</a>

      <span>© Copyright 2022-{anoAtual} - All Rights Reserved</span>
    </div>
    </footer>
  )
}

export default Footer