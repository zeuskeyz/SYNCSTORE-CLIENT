/* eslint-disable react/prop-types */
import { Typography, Button } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContextProvider"
import { Link } from "react-router-dom"

export const Header = ({ newUser }) => {
    const linkers = Object.values({ newUser })
    const user = useContext(UserContext)

    return (
        <>
            <div className="container mt-0 mb-3 d-flex">
                <div className="me-auto">
                    <Typography className="text-capitalize">
                        Welcome, {user.username}
                    </Typography>
                </div>
                <div className="">
                    {
                        linkers?.map((linker, index) =>
                            <Link key={index} to={linker.link}>

                                <Button color="warning" startIcon={linker.icon}>
                                    {linker.name}
                                </Button>
                            </Link>
                        )
                    }
                </div>
            </div>




        </>
    )
}
