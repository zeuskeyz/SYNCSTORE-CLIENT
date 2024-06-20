import { EmailRounded, Person, WorkHistoryRounded } from "@mui/icons-material"
import { Button, Card, CardContent, Paper, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../contexts/UserContextProvider"

export const MyInfo = () => {

    const account = useContext(UserContext)

    return (
        <>
            <Paper elevation={2}>

                <Card variant='' className="rounded-pill">
                    <CardContent className="">
                        <div ><Person className="fs-1" /></div>
                        <div>
                            <Button style={{ 'color': 'black' }} className="text-uppercase my-0 py-0">
                                <Typography variant="h2">{account.username}</Typography>
                            </Button>
                        </div>
                        <div>
                            <Button style={{ 'color': 'black' }} startIcon={<EmailRounded />} className="text-lowercase fs-5">
                                <Typography>{account.email}</Typography>
                            </Button>
                        </div>
                        <div>
                            <Button style={{ 'color': 'black' }} startIcon={<WorkHistoryRounded />} className="text-uppercase fs-6">
                                <Typography>{account.role} | {account.shop}</Typography>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Paper>
        </>
    )
}