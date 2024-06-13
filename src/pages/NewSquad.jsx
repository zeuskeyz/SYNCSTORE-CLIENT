import { CancelRounded } from "@mui/icons-material"
import { Navigation } from "../components/Navigation"
import { Header } from "../components/Header"
import { AddSquad } from "../components/AddSquad"

export const NewSquad = () => {
    const goBack = { link: `/all-users`, name: 'cancel', icon: <CancelRounded/> }

    return (
        <>
            <div className="container">

                <div className='container mt-3'>
                    <Navigation />
                </div>

                <div className="container ps-5 ms-5">

                    <div className="container ps-5 ms-3">
                        <Header goBack={goBack} />
                    </div>

                    <div className="container ps-5 m-3">
                        <AddSquad />
                    </div>
                </div>

            </div >

        </>
    )
}
