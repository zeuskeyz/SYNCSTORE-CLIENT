import Axios from 'axios'
import { PersonRemoveRounded } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const ConfirmDelete = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        Axios.get(`${URL}/delete-user/${id}`).then(req => console.log(req.data))
    }, [id])

    const handleDelete = () => {
        Axios.post(`${URL}/delete-user/${id}`).then(navigate('/all-users'))
    }
    
    return (
        <>
            <div className="my-4 py-4">
                <Paper elevation={12}>
                    <Card variant='outlined'>

                        <CardContent className="m-3">
                            <CardHeader action='CONFIRM DELETION' className="fs-3 text-center mb-4" />
                            <Typography className="text-uppercase fs-3">
                                ODACK
                            </Typography>
                            <Typography variant="h6" className="">
                                ROLE : ADMIN
                            </Typography>
                            <Typography variant="h6" className="">
                                SHOP : R61
                            </Typography>
                            <Typography variant="h6" component="div">
                                EMAIL: odack@email.com
                            </Typography>
                        </CardContent>

                    </Card>
                </Paper>
                <Paper elevation={4}>
                    <CardActions className="justify-content-center mt-4">
                        <Paper className="col-12" elevation={2}>
                            <Button onClick={handleDelete} className="col-12" variant="" color="" endIcon={<PersonRemoveRounded />}>DELETE USER</Button>
                        </Paper>
                    </CardActions>
                </Paper>
            </div>

        </>
    )
}
