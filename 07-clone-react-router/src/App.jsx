import { useEffect, useState } from 'react'
import { EVENTS } from './const/events'
import { Home } from './pages/Home'
import { About } from './pages/About'
import './App.css'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
]


function Router({ routes = [], defaultComponent: DefaultComponent = () => null }) {
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

  const Page = routes.find(({ path }) => path === currentPath)?.component
  return Page ? <Page /> : <DefaultComponent />
}

function App() {
  return (
    <>
      <Router
        routes={routes}
      />
    </>
  )
}

export default App
