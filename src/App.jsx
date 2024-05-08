import React from 'react'
import "./App.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  return (
    <div>
      <h1>Portfolio</h1>
      <navbar />
      <div className='dark-light-mode'>
        <label class="switch" >
          <input type='checkbox' />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default App
