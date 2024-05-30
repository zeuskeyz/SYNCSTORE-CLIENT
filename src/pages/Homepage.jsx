import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Homepage = () => {
  return (
    <div>
        <Typography variant="h5"> Welcome Home </Typography>
        <Link to={'/open-tasks'}>Open Tasks</Link>
    </div>
  )
}
