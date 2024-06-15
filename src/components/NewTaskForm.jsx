import { Button, Chip, MenuItem, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import toast from "react-hot-toast"
import Axios from 'axios'
import { URL } from "../App"
import { UserContext } from "../contexts/UserContextProvider"

export const NewTaskForm = () => {
    const defaults = { name: '', shop: '', creator: '', assignee: '', audience: '', details: '' }
    const [task, setTask] = useState(defaults)
    const [teams, setTeams] = useState()
    const maker = useContext(UserContext)
    const handleInput = event => setTask(prev => { return { ...prev, [event.target.name]: event.target.value } })

    useEffect(() => { Axios.get(`${URL}/all-squads`).then(res => setTeams(res.data)) }, [teams])


    const handleSubmit = event => {
        event.preventDefault()
        console.log(task)
        Axios.post(`${URL}/new-ask`, task).then(setTask(defaults)).then(({ data }) => toast.success(data.note))
    }
    return (
        <>
            <Form className='container mx-5 px-5' onSubmit={handleSubmit}>

                <div className='my-3'>
                    <Chip color="warning" label='CREATE A TASK' />
                </div>

                <div className='row my-3'>
                    <div className="col-12">
                        <TextField required className="form-control" type="text" name="name" label="Task Name" variant="filled" color='warning' value={task.name} onChange={handleInput} />
                    </div>
                </div>

                <div className='row my-3'>
                    <div className='col-6'>
                        <TextField required className="form-control text-start" select type="text" name="shop" label="Shop Code" variant="filled" color='warning' value={maker.shop} onChange={handleInput}>
                            <MenuItem className="" value={maker.shop}> {maker.shop} </MenuItem>
                        </TextField>
                    </div>
                    <div className="col-6">
                        <TextField required className='form-control text-start' select type="text" name="creator" label="Created By" variant="filled" color='warning' value={maker.username} onChange={handleInput} >
                            <MenuItem className="text-uppercase" value={maker.username}>{maker.username}</MenuItem>
                        </TextField>
                    </div>

                </div>

                <div className='row my-3'>
                    <div className="col-6">
                        <TextField required className="form-control text-start" select type="text" name="assignee" label="Assign To" variant="filled" defaultValue="" color='warning' value={task.assignee} onChange={handleInput}>
                            <MenuItem value="All">Everybody</MenuItem>
                            <MenuItem value="Any">Anybody</MenuItem>
                        </TextField>
                    </div>
                    <div className="col-6">
                        <TextField required className="form-control text-start" select type="text" name="audience" label="Select Audience" variant="filled" defaultValue="" color='warning' value={task.audience} onChange={handleInput}>
                            {teams?.map(team => (
                                <MenuItem value={team.name} key={team._id}>{team.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
                <div className='row my-3'>
                    <div className="col-12">
                        <TextField required multiline rows={3} className="form-control" type="text" name="details" label="Task Details" variant="outlined" color='warning' value={task.details} onChange={handleInput} />
                    </div>
                </div>

                <div className="my-3">
                    <Button type="submit" fullWidth variant="contained" color="warning" >Submit</Button>
                </div>

            </Form >

        </>
    )
}
