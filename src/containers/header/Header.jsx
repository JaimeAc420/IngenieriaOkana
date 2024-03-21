import React from 'react'
import './header.css';
import { RiH1 } from 'react-icons/ri';
import mainimg from '../../assets/mainimg.jpg'

export const Header = () => {
  return (
    <div className='okana__header section__padding' id='home'>
      <div className='okana__header-content'>
        <h1 className='gradient__text'>Ingenieria Okana</h1>
        <p>
        Explora las amplias posibilidades del campo de la ingeniería 
        y contribuye al alcance de tus metas empresariales a travéz del 
        respaldo de una empresa competente que ha sido concebida 
        para atender tus necesidades de manera integral.
        </p>
      </div>
      <div className='okana__header-content__img'>
        <img src={mainimg} alt="main" />
      </div>

      
    </div>

  )
}

export default Header