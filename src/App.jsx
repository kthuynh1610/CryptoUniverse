import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Header from './components/Header';

function App() {

  return (
    <>
    <div className='flex'>
      <Header/>
      <Home/>
    </div>
    </>
  )
}

export default App
