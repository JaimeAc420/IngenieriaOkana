import React, { useState } from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logok from '../../assets/loguinpeq2.svg'

const Menu = () => (
  <>
  <p><a href='#home'>Inicio</a></p>
  <p><a href='#quisom'>Quienes somos</a></p>
  <p><a href='#services'>Servicios</a></p>
  <p><a href='#allies'>Aliados</a></p>
  <p><a href='#blog'>Blog</a></p>
  <p><a href='#contact'>Contacto</a></p>
  </>
)

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='okana__navbar'>
      <div className='okana__navbar-links'>
        <div className='okana__navbar-links_logo'>
          <img src={ logok } alt='logoka' fill="#FFFFFF"/>
        </div>
        <div className='okana__navbar-links_container'>
          <Menu />
        </div>
        <div className='okana__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
          }
          {toggleMenu && (
            <div className='okana__navbar-menu_container scale-up-center'>
              <div className='okana__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default NavBar