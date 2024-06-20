import { AddTaskRounded, HomeRounded } from "@mui/icons-material"
import { Header } from "../components/Header"
import { Navigation } from "../components/Navigation"
import { TeamTasks } from "../components/TeamTasks"

export const OpenTasks = () => {
  const home = { link: `/homepage`, name: 'Home', icon: <HomeRounded /> }
  const pendings = { link: '/picked-tasks', name: 'My Tasks', icon: <AddTaskRounded /> }

  return (
    <>
      <div className="container ">
        <div className="container">
          <Navigation />
        </div>

        <div className="container d-flex flex-column justify-content-end align-items-center ms-5 ps-5">
          <div className='container my-3 px-5'> <Header home={home} pendings={pendings} /> </div>

          <div className='container mx-5 px-5'> <TeamTasks /> </div>
        </div>
      </div>
    </>
  )
}
