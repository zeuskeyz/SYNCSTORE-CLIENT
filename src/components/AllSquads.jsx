import { Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import Axios from 'axios'
import { Delete, StoreRounded } from "@mui/icons-material"
import { EmptyTasks } from "./EmptyTasks"

export const AllSquads = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [groups, setGroups] = useState([])

    const handleDelete = () => {
        Axios.post(`${URL}/delete-squad/${id}`).then(navigate('/all-squads'))
    }

    useEffect(() => {
        Axios.get(`${URL}/all-squads`).then(res => setGroups(res.data))
    }, [groups])

        let results = groups.map(group => (
            <Paper key={group._id}>

                <Paper elevation={4}>
                    <Card variant='outlined'>
                        <Paper elevation={6} className="m-3">
                            <CardContent className="m-3">
                                <CardHeader action={group.name} className="fs-5 text-center" />
                                <Typography className="text-uppercase fs-5 mb-3">
                                    <StoreRounded /> {group.shop}
                                </Typography>
                                <Typography variant="subtitle1" className="">
                                    {group.tasks}
                                </Typography>
                                <Typography variant="subtitle1" className="">
                                    {group.shop}
                                </Typography>
                            </CardContent>
                        </Paper>
                    </Card>
                </Paper>

                <Paper elevation={4}>
                    <CardActions className="justify-content-center mt-4">
                        <Paper className="col-12" elevation={2}>
                            <Button onClick={handleDelete} className="col-12" color="error" endIcon={<Delete />}>DELETE</Button>
                        </Paper>
                    </CardActions>

                </Paper>

            </Paper>
        ))

    return (
        <>
            {groups.length ? results : <EmptyTasks/> }
        </>
    )
}
