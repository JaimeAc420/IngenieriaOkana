import React from 'react'
import './blog.css';
import Article from '../../components/article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './import';

export const Blog = () => {
  return (
    <div className='okana__blog section__padding' id='blog'>
      <div className='okana__blog-heading'>
        <h1 className='gradient__text'>Mira lo último que Okana está haciendo</h1>
      </div>
        <div className='okana__blog-container'>
          
          <div className='okana__blog-container_groupb'>
            <Article imgurl={blog01} date='Jun, 2023. Bogotá DC' title='Montaje sistema fotovoltaico - compañia de ingeniería'/>
            <Article imgurl={blog02} date='Ago, 2023. Medellín' title='Refuerzo y adecuación de estructura que soporta nuestro sistema fotovoltaico'/>
            <Article imgurl={blog03} date='Nov, 2023. Bogotá DC' title='Refuerzo y adecuación de estructura de sistema fotovoltaico en colegio privado'/>
            <Article imgurl={blog04} date='Sept, 2023. Bucaramanga' title='Remodelación de recepciones Torres Colseguros'/>
            <Article imgurl={blog05} date='Dic, 2022. Bucaramanga' title='Montaje de sistema fotovoltaico en la urbanización de Cañaberal'/>  
          </div>

      </div>
    </div>
  )
}

export default Blog