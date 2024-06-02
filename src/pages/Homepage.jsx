import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Navigation } from "../components/Navigation"

export const Homepage = () => {
  return (
    <div className="container">
          <Navigation/>
          <Typography variant="h5"> Welcome Home </Typography>
          <Link to={'/open-tasks'}>Open Tasks</Link>
        

    </div>
  )
}
