import { UserCard } from '../components/UserCard'
import { Navigation } from '../components/Navigation'
import { Header } from '../components/Header'
import { AppRegistrationRounded, CancelRounded, GroupAddRounded, HomeRounded } from '@mui/icons-material'
import { UserSquads } from '../components/UserSquads'
import { SquadsCarousel } from '../components/SquadsCarousel'
import { DeleteUser } from '../components/DeleteUser'
import { Paper } from '@mui/material'


export const ManageUser = () => {
    const home = { link: `/homepage`, name: 'Home', icon: <HomeRounded /> }
    const edit = { link: 'edit', name: 'Edit User', icon: <AppRegistrationRounded /> }
    const addSquad = { link: 'add-squad', name: 'Add Squad', icon: <GroupAddRounded /> }
    const goBack = { link: `/all-users`, name: 'cancel', icon: <CancelRounded /> }


    return (
        <div className="container">

            <div className='container mt-3'>
                <Navigation />
            </div>

            <div className="container ps-5 ms-5">

                <div className="container ps-5 ms-3">
                    <Header edit={edit} addSquad={addSquad} goBack={goBack} home={home} />
                </div>

                <div className="container ps-5 m-3">
                    <div className="row g-1">

                        <div className='col-6'>
                            <UserCard />
                        </div>
                        <div className="col-6">
                            <SquadsCarousel />
                        </div>

                    </div>

                    <div className="row g-2 py-1">
                        <UserSquads />
                    </div>

                    <Paper className="col-12">
                        <DeleteUser />
                    </Paper>

                </div>
            </div>

        </div >

    )
}
