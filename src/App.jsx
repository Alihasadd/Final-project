import React from 'react'
import "./App.css";
import reactLogo from './assets/react.svg'
import seattle from "./assets/Seattle.jpg";
import sanfran from "./assets/Sanfran.jpg";  
import portlandme from "./assets/Portlandme.jpg"
import niagara from "./assets/Niagara.jpg"
import newportri from "./assets/Newportri.jpg"
import Roosevelt from "./assets/Roosevelt.jpg"
//dimport {niagara} from "./assets/*"



function App() {
  return (
    <div>
      <h1 className='p-2'>Portfolio</h1>

      <p className="paragraph 1">I found Santiago on January 26th, 2018 in a town in Puerto Rico called Toa Baja. He came into the plaza with a little brown miniture rat terrier that we named Chico. If you had asked me moments before meeting Santiago, I would have ademantly said that I was not planning on getting a dog. </p>
      <p className='paragraph 2'>I always travel with dog treats and started out tossing the cookies to the 2 dogs. They got closer and closer to me until they let me pet them. While petting Santiago he lean his head into my hand and it was at that moment I knew I was getting a dog.</p>
      <p className="paragraph 3">Santiago has been to over 20 states and loves to travel. Here are some of his favorite places we've been.</p>

      <ul>
        <li></li>
      </ul>
      <div className='grid grid-cols-4 gap-4'>
        <img src={seattle} className='p-2'/>
        <img src={sanfran} />
        <img src={portlandme} />
        <img src={niagara} />
        <img src={newportri} />
        <img src={Roosevelt} />
 
      </div>
      
      <navbar />
      
    </div>
  )
}

export default App
