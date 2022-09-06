import { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import AppRoutes from './main/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Header></Header>
        <div className='main'>
          <AppRoutes></AppRoutes>
        </div>
        <Footer></Footer>
      </div>
    
    
  )
}

export default App
