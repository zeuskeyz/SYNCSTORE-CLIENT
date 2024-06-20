import { HomeRounded, PersonAdd } from '@mui/icons-material'
import { Navigation } from '../components/Navigation'
import { Teamtable } from '../components/Teamtable'
import { Header } from '../components/Header'

export const Users = () => {
    //HEADER NAVLINK DETAILS
    const home = { link: `/homepage`, name: 'Home', icon: <HomeRounded /> }
    const newUser = { link: '/new-user', name: 'Add User', icon: <PersonAdd /> }

    return (
        <>
            <div className="container ">
                <div className="container">
                    <Navigation />
                </div>

                <div className="container d-flex flex-column justify-content-end align-items-center ms-5 ps-5">
                    <div className='container my-3 px-5'> <Header home={home} newUser={newUser} /> </div>

                    <div className='container mx-5 px-5'> <Teamtable /> </div>
                </div>
            </div>

        </>
    )
}
