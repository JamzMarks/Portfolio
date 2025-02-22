import { useState } from 'react'
import './App.css'

import AppRoutes from './main/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <div className='main'>      
            <AppRoutes></AppRoutes>
        </div>
      </div>
    
    
  )
}

export default App
