import { PersonAdd } from '@mui/icons-material'
import { Navigation } from '../components/Navigation'
import { Teamtable } from '../components/Teamtable'
import { Header } from '../components/Header'

export const Users = () => {
    //HEADER NAVLINK DETAILS
    const links = { link: '/new-user', name: 'Add User', icon: <PersonAdd /> }
    return (
        <>
            <div className="container ">
                <div className="container">
                    <Navigation />
                </div>

                <div className="container d-flex flex-column justify-content-end align-items-center ms-5 ps-5">
                    <div className='container my-3 px-5'> <Header navlets={links} /> </div>

                    <div className='container mx-5 px-5'> <Teamtable /> </div>
                </div>
            </div>



        </>
    )
}
