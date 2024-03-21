import React from 'react'
import './footer.css';
import loginpeq2 from '../../assets/loguinpeq2.svg'


export const Footer = () => {

  const emailLinks = 'german.rivero@ingenieriaokana.com';
  const subjectLinks = 'Información General';

  const handleEmailLinksClick = () => {
    const mailToLinkLinks = `mailto:${encodeURIComponent(emailLinks)}?subject=${encodeURIComponent(subjectLinks)}`;
    window.location.href = mailToLinkLinks;
  };

  const emailEmpresa = 'jaime.aceros@ingenieriaokana.com'
  const subjectEmpresa = 'Contacto Empresarial'

  const handleEmailLEmpresaClick = () => {
    const mailToLinkEmpresa = `mailto:${encodeURIComponent(emailEmpresa)}?subject=${encodeURIComponent(subjectEmpresa)}`;
    window.location.href = mailToLinkEmpresa;
  };

  const emailProyectos = 'proyectos@ingenieriaokana.com'
  const subjectProyectos = 'Proyectos - Información'

  const handleEmailLProyectosClick = () => {
    const mailToLinkProyecto = `mailto:${encodeURIComponent(emailProyectos)}?subject=${encodeURIComponent(subjectProyectos)}`;
    window.location.href = mailToLinkProyecto;
  };

  const handleClick = () => {
    console.log('Text clicked!');
  };



  return (
    <div className='okana__footer section__padding' id='contact'>
      <div className='okana__footer-heading'>
        <h1 className='gradient__text'>Hagamos de tu proyecto algo memorable</h1>
      </div>
      <div className='okana__footer-btn'>
        <p>Gracias por tu visita</p>
      </div>
      <div className='okana__footer-links'>
        <div className='okana__footer-links_logo'>
          <img src={loginpeq2} alt='logo okana'/>
          <p>Cra 2 32-26 Cundinamarca, Todos los derechos reservados</p>
        </div>
        <div className='okana__footer-links_div'>
          <h4>Links</h4>
          <p><a href='https://empresite.eleconomistaamerica.co/INGENIERIA-OKANA-SAS.html' onClick={handleClick}>Información</a></p>
          <p><a href='https://www.belzona.com/es/' onClick={handleClick}>Belzona</a></p>
          <p>Redes sociales</p>
          <p><a href='#contact' onClick={handleEmailLinksClick}>Contacto</a></p>
        </div>
        <div className='okana__footer-links_div'>
          <h4>Empresa</h4>
          <p>Misión</p>
          <p>Visión</p>
          <p><a href='#contact' onClick={handleEmailLEmpresaClick}>Contacto</a></p>
        </div>
        <div className='okana__footer-links_div'>
          <h4>Proyectos</h4>
          <p>Cra 2 32-26 Cundinamarca</p>
          <p>+57 302 5433017</p>
          <p><a href='#contact' onClick={handleEmailLProyectosClick}>proyectos@ingenieriaokana.com</a></p>
        </div>
      </div>
      <div className='okana__footer-copyright'>
        <p>© 2024 Ingeniería Okana. Todos los derechos reservados</p>
      </div>  
    </div>
  )
}

export default Footer