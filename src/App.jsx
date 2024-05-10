import React from 'react'
import "./App.css";
import reactLogo from './assets/react.svg'
import seattle from "./assets/Seattle.jpg";
import sanfran from "./assets/Sanfran.jpg";  



function App() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='gap-8 columns-3 p-2'>
        <img class="w-full aspect-video" src={seattle} />
        <img class="w-full aspect-square" src={sanfran} />
        

      </div>
      
      <navbar />
      
    </div>
  )
}

export default App
