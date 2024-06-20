import { HomeRounded } from "@mui/icons-material"
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"
import { PendingTasks } from "../components/PendingTasks"

export const PickedTasks = () => {
    const home = { link: `/homepage`, name: 'Home', icon: <HomeRounded /> }

    return (
        <>
            <div className="container ">
                <div className="container">
                    <Navigation />
                </div>

                <div className="container d-flex flex-column justify-content-end align-items-center ms-5 ps-5">
                    <div className='container my-3 px-5'> <Header home={home} /> </div>

                    <div className='container mx-5 px-5'> <PendingTasks/> </div>
                </div>
            </div>
        </>
    )
}