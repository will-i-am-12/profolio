import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='home-page'>
      <div className='profile-img'>
        <img src='/src/assets/among-us-green.png' alt = 'Profile Image'/>
      </div>
      <div className='profile-text'>
        <h5>Hi I'm</h5>
        <h1>William Lu</h1>
        <h5>and I'm <span>Sophmore</span></h5>
        <p></p>
        <div className='btn-group'>
          <a href="" className="btn active">Download Resume</a>
        </div>
        <div className='social'>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-github"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-email"></i></a>
        </div>
      </div>
    </div>
  )
}

export default App
