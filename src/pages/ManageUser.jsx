import { UserCard } from '../components/UserCard'
import { Navigation } from '../components/Navigation'
import { Header } from '../components/Header'
import { AppRegistrationRounded, DeleteForeverRounded, GroupAddOutlined, LogoutRounded } from '@mui/icons-material'
import { TaskCount } from '../components/TaskCount'

export const ManageUser = () => {

  const edit = { link: 'edit', name: 'Edit User', icon: <AppRegistrationRounded /> }
  const deleted = { link: 'delete', name: 'Delete User', icon: <DeleteForeverRounded /> }
  const addSquad = { link: 'delete', name: 'Add Squad', icon: <GroupAddOutlined /> }
  const logout = { link: 'user-logout', name: 'Logout', icon: <LogoutRounded /> }

  return (
    <div className="container">
      <div className='container mt-3'>
        <Navigation />
      </div>
      <div className="container ps-5 ms-5">

        <div className="container ps-5 ms-3">
          <Header edit={edit} deleted={deleted} addSquad={addSquad} logout={logout} />        
        </div>

        <div className="container ps-5 m-3">
          <div className="row">
            <div className="col-4"><UserCard /></div>
            <div className="col-8"></div>
          </div>
        </div>

        <div className="container ps-5 m-3">
          <div className="row">
            <div className="col-4"><TaskCount/></div>
            <div className="col-4"><TaskCount/></div>
            <div className="col-4"><TaskCount/></div>
          </div>
        </div>
      </div>

    </div>
  )
}
