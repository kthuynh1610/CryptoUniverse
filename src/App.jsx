import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import News from './components/News';
import Crypto from './components/Crypto';
import Currencies from './components/Currencies';


function App() {

  return (
    <>
    <div className='min-h-screen flex flex-row w-screen bg-gray-100 text-gray-700'>
      <Header/>
      <div className='w-full'>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route>
            <Route path='/News' element={<News/>}/>
            <Route path='/Crypto' element={<Crypto/>}/>
            <Route path='/Exchanges' element={<Currencies/>}/>
          </Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
