import { useState } from 'react'
import './App.css'
import  Router  from  './routes'


function App() {

  const [isAuth, setIsAuth] = useState(false)
  return (
    <div>
      <Router isAuth={isAuth} setIsAuth={setIsAuth} />
    </div>
    
  )
}

export default App
