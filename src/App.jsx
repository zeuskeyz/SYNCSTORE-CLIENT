//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { Alerter } from './components/Alerter'
import { Display } from './components/Display'
import { SignIn } from './pages/SignIn'

export const URL = 'http://localhost:3003/syncstore'

function App() {
  return (
    <>
    <Display/>
      <Alerter/>
      
    </>
  )
}

export default App
