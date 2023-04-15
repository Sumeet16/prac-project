import { useState } from 'react'
import './App.css'
import footer from "./assets/footer.png"
import menuBar from "./assets/menu-bar.png"
import menuTab from "./assets/menu-tab.png"
import navbar from "./assets/navbar.png"
import script from "./assets/script.png"

function App() {
  let date = new Date()
  console.log(date);
  return (
    <div className="container">
      <img src={navbar} className='navbar' />
      <img src={menuTab} className='menuTab' />
      <div className="middle_section">
        <img src={menuBar} className='menuBar' />
        <div className="second-col"></div>
      </div>
      <img src={footer} className='footer' />
    </div>
  )
}

export default App;
