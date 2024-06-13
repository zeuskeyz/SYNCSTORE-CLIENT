import { EmailRounded, ManageAccounts, WorkHistoryRounded } from "@mui/icons-material"
import { Button, Card, CardContent, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Axios from 'axios'
import { URL } from "../App"
import { useParams } from "react-router-dom"

export const UserCard = () => {
    const [account, changeAccount] = useState({})
    const { id } = useParams()

    useEffect(() => {
        Axios.get(`${URL}/user/${id}`).then(res => changeAccount(res.data))
    }, [id])

    return (
        <>
            <Card variant='' className="rounded-pill">
                <CardContent className="">
                    <div ><ManageAccounts className="fs-1" /></div>
                    <div>
                        <Button style={{ 'color': 'black' }} className="text-uppercase fs-1 display-3 my-0 py-0">
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
        </>
    )
}
