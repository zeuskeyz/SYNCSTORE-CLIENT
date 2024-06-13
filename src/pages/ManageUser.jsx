import { UserCard } from '../components/UserCard'
import { Navigation } from '../components/Navigation'
import { Header } from '../components/Header'
import { AppRegistrationRounded, GroupAddOutlined, LogoutRounded } from '@mui/icons-material'
import { TaskCount } from '../components/TaskCount'
import { SquadsCarousel } from '../components/SquadsCarousel'
import { Paper } from '@mui/material'
import { DeleteUser } from '../components/DeleteUser'

export const ManageUser = () => {

  const edit = { link: 'edit', name: 'Edit User', icon: <AppRegistrationRounded /> }
  const addSquad = { link: 'add-squad', name: 'Add Squad', icon: <GroupAddOutlined /> }
  const logout = { link: 'user-logout', name: 'Logout', icon: <LogoutRounded /> }

  return (
    <div className="container">

      <div className='container mt-3'>
        <Navigation />
      </div>

      <div className="container ps-5 ms-5">

        <div className="container ps-5 ms-3">
          <Header edit={edit} addSquad={addSquad} logout={logout} />
        </div>

        <div className="container ps-5 m-3">
          <div className="row">

            <div className="col-6">
              <Paper>
                <UserCard />
                <SquadsCarousel />
                <div className="mt-2">
                  <DeleteUser/>
                </div>
              </Paper>
            </div>

            <div className="col-6 row g-1">
              <TaskCount />
              <TaskCount />
              <TaskCount />
            </div>


          </div>

        </div>
      </div>

    </div >

  )
}
