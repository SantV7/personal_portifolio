import { useState } from 'react'
import './style/global.css'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import Services from './components/footer/Services'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Services />
    </>
  )
}

export default App
