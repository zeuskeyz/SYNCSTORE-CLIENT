import { CancelRounded, HomeRounded } from "@mui/icons-material"
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"
import { AddSquad } from "../components/AddSquad"

export const NewSquad = () => {
    const home = { link: `/homepage`, name: 'Home', icon: <HomeRounded /> }
    const goBack = { link: `/all-squads`, name: 'cancel', icon: <CancelRounded/> }

    return (
        <>
            <div className="container">

                <div className='container mt-3'>
                    <Navigation />
                </div>

                <div className="container ps-5 ms-5">

                    <div className="container ps-5 ms-3">
                        <Header  home={home} goBack={goBack} />
                    </div>

                    <div className="container ps-5 m-3">
                        <AddSquad />
                    </div>
                </div>

            </div >

        </>
    )
}
