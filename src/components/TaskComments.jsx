import { Button, Chip, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import Axios from 'axios'
import { URL } from "../App"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

export const TaskComments = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const defaults = { comments: '' }
    const [task, setTask] = useState(defaults)
    const handleInput = event => setTask(prev => { return { ...prev, [event.target.name]: event.target.value } })

    useEffect(() => { Axios.get(`${URL}/close-task/${id}`) }, [id])

    const handleSubmit = event => {
        event.preventDefault()
        Axios.post(`${URL}/close-task/${id}`, {task}).then(({ data }) => toast.success(data)).then(navigate('/picked-tasks'))
    }

    return (
        <>
            <Form className='container px-5' onSubmit={handleSubmit}>

                <div className=''>
                    <Typography variant="h6" className="text-uppercase mb-3"> {task.name} </Typography>
                </div>

                <div className="mb-3">
                    <Chip size="medium" color="warning" label='COMPLETION COMMENTS' />
                </div>

                <div className='my-3'>
                    <TextField required multiline rows={8} className="form-control" type="text" name="comments" label="Task Details" variant="outlined" color='warning' value={task.comments} onChange={handleInput} />
                </div>

                <div className="mt-5">
                    <Button type="submit" fullWidth variant="contained" color="warning" >Submit</Button>
                </div>
            </Form >


        </>
    )
}
