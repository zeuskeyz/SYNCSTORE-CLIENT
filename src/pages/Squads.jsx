import { Logout, Workspaces } from "@mui/icons-material"
import { AllSquads } from "../components/AllSquads"
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"

export const Squads = () => {
    //HEADER NAVLINK DETAILS
    const links = { link: '/new-squad', name: 'Add Squad', icon: <Workspaces /> }
    const logout = { link: '/user-logout', name: 'Logout', icon: <Logout /> }

    return (
        <>
            <div className="text-end ms-5 ps-5">
                <Navigation />
                <div className="text-center ms-5 px-5">
                    <div className='container my-3 px-5 text-end'> <Header navlets={links} logout={logout} /> </div>
                    <div className='container my-3 px-5'> <AllSquads /> </div>
                </div>
            </div>
        </>
    )
}
