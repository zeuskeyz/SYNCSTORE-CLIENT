import { EditUser } from "../components/EditUser"
import { Navigation } from "../components/Navigation"

export const UserEditPage = () => {
    return (
        <>
            <div className="text-end m-5 px-5 py-3">
                <Navigation/>
                <div className="text-center ms-5 px-5">
                <EditUser />
                </div>
            </div>
        </>
    )
}