import React from 'react'
import "./App.css";
import reactLogo from './assets/react.svg'
import seattle from "./assets/Seattle.jpg";
import sanfran from "./assets/Sanfran.jpg";  
import portlandme from "./assets/Portlandme.jpg"



function App() {
  return (
    <div>
      <h1 className='p-2'>Portfolio</h1>
      <div className='grid grid-cols-4 gap-4'>
        <img  src={seattle} />
        <img  src={sanfran} />
        <img src={portlandme} />
        

      </div>
      
      <navbar />
      
    </div>
  )
}

export default App
