import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { NewTaskForm } from "../components/NewTaskForm"

export const NewTask = () => {
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

                    <div className="container ">
                        <NewTaskForm />
                    </div>
                </div>

            </div >

        </>
    )
}
