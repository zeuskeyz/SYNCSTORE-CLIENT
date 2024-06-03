//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Axios from 'axios'
import { Alerter } from './components/Alerter'
import { SignIn } from './pages/SignIn'
import { Homepage } from './pages/Homepage'
import { SignUp } from './pages/SignUp'
import { OpenTasks } from './pages/OpenTasks'
import { Users } from './pages/Users'
import { UserEditPage } from './pages/UserEditPage'
import { UserDelete } from './pages/UserDelete'
import { Squads } from './pages/Squads'

export const URL = 'http://localhost:3003'
Axios.defaults.withCredentials = true
Axios.defaults.baseURL = 'http://localhost:3003'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/homepage' element={<Homepage />} />

        <Route path='/new-user' element={<SignUp />} />
        <Route path='/all-users' element={<Users />} />
        <Route path='/edit-user/:id' element={<UserEditPage />} />
        <Route path='/delete-user/:id' element={<UserDelete />} />

        <Route path='/all-squads/' element={<Squads />} />




        <Route path='/open-tasks' element={<OpenTasks />} />


      </Routes>
      <Alerter />
    </>
  )
}

export default App
