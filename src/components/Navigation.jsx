import { LogoutRounded } from "@mui/icons-material"
import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContextProvider"

const adminLinks = [{ 'all-users': 'Team' }, { 'new-ask': 'Create Task' }, { 'open-tasks': 'Team Tasks' }, { 'open-asks': 'My Requests' }, { 'all-squads': 'Squads' }]
const userLinks = [{ 'homepage': 'My Profile' }, { 'new-ask': 'Create Task' }, { 'open-tasks': 'Team Tasks' }, { 'open-asks': 'My Requests' }]

export const Navigation = () => {

    const user = useContext(UserContext)
    let menuList = user.role === 'admin' ? adminLinks : userLinks

    const DrawerList = (
        
        <>
            <div className="my-3 text-center"> <Typography className="" >SYNCSTORE</Typography></div>
            <Divider />
            <List className="my-3 ms-3">

                {menuList.map((nav, index) => (
                    <ListItem key={index}>
                        <Link className="text-decoration-none text-secondary" color='warning' to={`/${Object.keys(nav)[0]}`}>
                            <ListItemButton>
                                <ListItemText primary={Object.values(nav)[0]} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}

                <ListItem className="mt-5">
                    <Button className="mt-4" color="warning" startIcon={<LogoutRounded />}>
                        LOGOUT
                    </Button>
                </ListItem>

            </List>

        </>
    )

    return (
        <>
            <Drawer variant="persistent" open={true} >
                {DrawerList}
            </Drawer>


        </>
    )
}
