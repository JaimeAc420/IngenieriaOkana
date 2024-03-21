import React from 'react'
import './App.css'

import { Footer, Blog, Features, Header, QuiSom, Allies } from './containers/ind';
import { CTA, Brand, NavBar, Article, Feature } from './components/ind';

const App = () => {
  return (
    <div className='App'>
      
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <QuiSom />
      <Features />
      <Allies />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
