import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { TaskComments } from "../components/TaskComments"

export const ClosingTasks = () => {
    return (
        <>

            <div className="container">

                <div className='container mt-3'>
                    <Navigation />
                </div>

                <div className="container ps-5 ms-5">

                    <div className="container ps-5 ms-3">
                        <Header />
                    </div>

                    <div className="container p-5">
                        <TaskComments />
                    </div>
                </div>

            </div >

        </>
    )
}
