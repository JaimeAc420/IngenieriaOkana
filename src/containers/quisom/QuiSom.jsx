import React from 'react';
import './quisom.css';
import { Feature } from '../../components/feature/Feature'

export const Quisom = () => {
  return (
    <div className='okana__quisom section__margin' id="quisom">
        <div className='okana__quisom-feature'>
            <Feature title="¿Quienes somos?" text="Ingeniería Okana S.A.S es una empresa
especializada en la dirección y ejecución de Proyectos de
Ingeniería con un equipo de profesionales idóneos en
las áreas mecánica, eléctrica y civil, alcanzando los objetivos
definidos para la satisfacción total de nuestros clientes."/>
        </div>
        <div className='okana__quisom-heading '>
          <h1 className='gradient__text'>Brindamos tecnología para potenciar la industria</h1>
          <p><a href='#blog'>Explora la galeria</a></p>
        </div>
        <div className='okana__quisom-container'>
          <Feature title="Calidad" text="Desde el inicio de cada proyecto hasta su culminación, nos comprometemos a superar las expectativas, empleando estándares rigurosos y prácticas de vanguardia."/>
          <Feature title="Confianza" text="Con una experiencia sólida y un historial favorable en la industria OIL & GAS, podemos garantizar un servicio eficiente y óptimo "/>
          <Feature title="Profesionalismo" text="La transparencia, la responsabilidad y el respeto son los pilares que sustentan nuestras interacciones comerciales."/>
        </div>
    </div>
  )
}

export default Quisom