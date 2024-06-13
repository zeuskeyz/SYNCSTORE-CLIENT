import { LogoutRounded } from "@mui/icons-material"
import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { Link } from "react-router-dom"

//const navlinks = ['New User', 'Create Task', 'My Tasks', 'My Asks']
const navLinks = [{ 'all-users': 'Team' }, { 'new-ask': 'Create Task' }, { 'open-tasks': 'My Assignements' }, { 'open-asks': 'My Requests' }, { 'all-squads': 'Squads' }]

export const Navigation = () => {

    const DrawerList = (

        <>
            <div className="my-3 text-center"> <Typography className="" >SYNCSTORE</Typography></div>
            <Divider />
            <List className="my-3 ms-3">

                {navLinks.map((nav, index) => (
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
