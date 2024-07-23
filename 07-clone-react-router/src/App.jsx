import { useEffect, useState } from 'react'
import { EVENTS } from './const/events'
import { Home } from './pages/Home'
import { About } from './pages/About'
import './App.css'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <>
      {currentPath === '/' && <Home />}
      {currentPath === '/about' && <About />}
    </>
  )
}

export default App
