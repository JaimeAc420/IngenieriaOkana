import React from 'react'
import './features.css';
import { Feature } from '../../components/feature/Feature'

const featuresData = [
  {
    title: 'Proyectos Solares',
    text: 'Diseñamos y realizamos el montaje de sistemas fotovoltaicos para ayudarle a ahorrar energia y salvaguardar el medio ambiente. Haga uso de tecnologias limpias'
  },
  {
    title: 'Ingeniería',
    text: 'Calcúlo, diseño, ejecución, mantenimiento y optimización de procesos'
  },
  {
    title: 'Dirección de proyectos',
    text: 'Nos encargamos de la planificación, coordinación y gestión de recursos relacionados a su proyecto, ayudandole a tomar las mejores decisiones posibles'
  },
  {
    title: 'Tecnología',
    text: 'Somos representantes y expertos en tecnología BELZONA, especializada en mantenimiento, reparación y optimización de plantas industriales'
  },
  
]

const Features = () => {
  return (
    <div className='okana__features section__padding' id='services'>
      <div className='okana__features-heading'>
        <h1 className='gradient__text'>Lleva tu proyecto al siguiente nivel. Elige la opción que mejor se adapta a tus necesidades</h1>
        <p>Estos son nuestros servicios</p>
      </div>
      <div className='okana__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
      

    </div>
  )
}
export default Features