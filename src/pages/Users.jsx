import { Navigation } from '../components/Navigation'
import { Teamtable } from '../components/Teamtable'

export const Users = () => {
    return (
        <>
            <div className="container-fluid">
                <Navigation />
                <div className=" ms-5 ps-5">
                    <Teamtable />
                </div>
            </div>



        </>
    )
}
