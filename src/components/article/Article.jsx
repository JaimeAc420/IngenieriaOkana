import React from 'react';
import './article.css';

export const Article = ( {imgurl, date, title} ) => {
  return (
    <div className='okana__blog-container_article'>
      <div className='okana__blog-container_article-image'>
        <img src={imgurl} alt='blog image'/>
      </div>
      <div className='okana__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        {/*<p>Conoce más</p>*/}

      </div>
        
    </div>
  )
}

export default Article