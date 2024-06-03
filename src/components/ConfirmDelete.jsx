import Axios from 'axios'
import { ContactMailRounded, Delete, Error, StoreRounded, WorkHistoryRounded } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL } from '../App'

export const ConfirmDelete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [toDelete, setToDelete] = useState({})

    useEffect(() => {
        Axios.get(`${URL}/delete-user/${id}`).then(res => setToDelete(res.data)).then(console.log())
    }, [id, toDelete])

    const handleDelete = () => {
        Axios.post(`${URL}/delete-user/${id}`).then(navigate('/all-users'))
    }

    return (
        <>
            <div className="my-4 py-4">
                <Paper elevation={1} className="p-3">


                    <Paper elevation={4}>
                        <Card variant='outlined'>
                            <Paper elevation={6} className="m-3">
                                <CardContent className="m-3">
                                    <CardHeader action='CONFIRM DELETION' className="fs-3 text-center" />
                                    <Typography className="text-uppercase fs-3 mb-3">
                                        {toDelete.username}
                                    </Typography>
                                    <Typography variant="subtitle1" className="">
                                        <WorkHistoryRounded /> ROLE : {toDelete.role}
                                    </Typography>
                                    <Typography variant="subtitle1" className="">
                                        <StoreRounded /> SHOP : {toDelete.shop}
                                    </Typography>
                                    <Typography variant="subtitle1" component="div">
                                        <ContactMailRounded /> EMAIL: {toDelete.email}
                                    </Typography>
                                </CardContent>
                            </Paper>
                        </Card>
                    </Paper>
                    <Paper elevation={4}>
                        <CardActions className="justify-content-center mt-4 container">
                            <Paper className="col-12 row" elevation={2}>
                                <Button onClick={handleDelete} className="col-6" color="error" endIcon={<Delete />}>DELETE</Button>
                                <Link className="col-6" to={'/all-users'}>
                                    <Button type='link' className="col-12" color="" endIcon={<Error />}>BACK</Button>
                                </Link>
                            </Paper>
                        </CardActions>
                    </Paper>
                </Paper>
            </div>

        </>
    )
}
