import React from 'react'
import './brand.css';
import { google, instagram, linkedin, atlassian } from './import'

export const Brand = () => {
  return (
    <div className='okana__brand section__padding'>
      <div>
        <img src={google} alt='google' width='90px'></img>
      </div>
      <div>
        <img src={instagram} alt='google' width='90px'></img>
      </div>
      <div>
        <img src={linkedin} alt='google' width='90px'></img>
      </div>
      <div>
        <img src={atlassian} alt='google' width='90px'></img>
      </div>
    </div>
  )
}

export default Brand