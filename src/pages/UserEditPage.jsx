import { CancelRounded } from "@mui/icons-material"
import { EditUser } from "../components/EditUser"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { useParams } from "react-router-dom"

export const UserEditPage = () => {
    const {id} = useParams()
    const goBack = { link: `/user/${id}`, name: 'cancel', icon: <CancelRounded/> }
    
    return (
        <>
            <div className="text-end m-5 px-5 py-3">
                <Navigation/>
                <div className="text-center ms-5 px-5">
                    <Header goBack={goBack}/>
                    <EditUser />
                </div>
            </div>
        </>
    )
}