import React from 'react'
import './allies.css';
import allieimg from '../../assets/belzonat.png'


export const Allies = () => {
  return (
    <div className='okana__allie section__padding' id='allies'>
        <div className='okana__allie-image'>
            <img src={ allieimg } alt='allie'></img>
        </div>
        <div className='okana__allie-content'>
            <h4>Conoce mas sobre nosotros</h4>
            <h1 className='gradient__text'>Nuestra misión ha sido superar las necesidades y expectativas de nuestros clientes</h1>
            <p>La tecnología de Belzona puede dar respuesta a una amplia variedad de áreas de reparación, desde sistemas preconfigurados 
                completos hasta reparaciones simples en el lugar. Belzona proporciona un servicio global 
                al sector OIL & GAS y a la industria en general.</p>
            <h4><a href='https://www.belzona.com/es/index.aspx' target='_blank' rel='noopener noreferrer'>Visítanos</a></h4>
        </div>
    </div>
  )
}

export default Allies