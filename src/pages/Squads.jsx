import { Workspaces } from "@mui/icons-material"
import { AllSquads } from "../components/AllSquads"
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"

export const Squads = () => {
    //HEADER NAVLINK DETAILS
    const links = { link: '/new-squad', name: 'New Squad', icon: <Workspaces /> }

    return (
        <>
            <div className="text-end ms-5 ps-5">
                <Navigation />
                <div className="text-center ms-5 px-5">
                    <div className='container my-3 px-5 text-end'> <Header navlets={links} /> </div>
                    <div className='container my-3 px-5'> <AllSquads /> </div>
                </div>
            </div>
        </>
    )
}
