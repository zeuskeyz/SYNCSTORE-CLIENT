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
import { ManageUser } from './pages/ManageUser'
import { Squads } from './pages/Squads'
import { UserToSquad } from './pages/UserToSquad'
import { NewSquad } from './pages/NewSquad'
import { NewTask } from './pages/NewTask'
import { PickedTasks } from './pages/PickedTasks'
import { ClosingTasks } from './pages/ClosingTasks'

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
        <Route path='/user/:id' element={<ManageUser />} />
        <Route path='/user/:id/edit' element={<UserEditPage />} />
        <Route path='/user/:id/add-squad' element={<UserToSquad />} />

        <Route path='/new-squad/' element={<NewSquad />} />
        <Route path='/all-squads/' element={<Squads />} />

        <Route path='/new-ask' element={<NewTask />} />
        <Route path='/open-tasks' element={<OpenTasks />} />
        <Route path='/picked-tasks' element={<PickedTasks />} />
        <Route path='/close-task/:id' element={<ClosingTasks />} />


      </Routes>
      <Alerter />
    </>
  )
}

export default App
