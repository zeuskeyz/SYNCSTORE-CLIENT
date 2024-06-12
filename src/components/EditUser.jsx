import { useState } from 'react'
import Axios from 'axios'
import { URL } from "../App"
//import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import { Group, UpdateDisabledRounded } from '@mui/icons-material'
import { Button, MenuItem, TextField } from '@mui/material'
import { Form } from 'react-bootstrap'


export const EditUser = () => {

    const [pojo, setPojo] = useState({ username: '', role: "User", email: '', shop: '' })

    const { id } = useParams()

    const handleInput = event => setPojo(prev => { return { ...prev, [event.target.name]: event.target.value } })

    const handleSubmit = event => {
        event.preventDefault()
        Axios.get(`/${URL}/edit-user/${id}`, { id }).then(setPojo())
    }

    return (
        <>
            <Form className='container' onSubmit={handleSubmit}>

                <div className='mb-5 pb-4'>
                    <legend>EDIT A USER</legend>
                </div>

                <div className='row my-3'>
                    <div className="col-6">
                        <TextField required className="form-control" type="text" name="username" label="Enter Username" variant="filled" color='warning' value={pojo.username} onChange={handleInput} />
                    </div>
                    <div className="col-6">
                        <TextField required className='form-control' type="email" name="email" label="Email Address" variant="filled" color='warning' value={pojo.email} onChange={handleInput} />
                    </div>
                </div>

                <div className='row my-3'>
                    <div className='col-6'>
                        <TextField required className="form-control" type="text" name="shop" label="Shop Code" variant="filled" color='warning' value={pojo.shop} onChange={handleInput} />
                    </div>
                    <div className="col-6">
                        <TextField required className="form-control text-start" select type="text" name="role" label="Select Role" variant="filled" defaultValue="" color='warning' value={pojo.role} onChange={handleInput}>
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                        </TextField>
                    </div>
                </div>
                <div className="my-3">
                    <Link className='mt-5' to={`/user/${id}`}>
                        <Button color="warning" startIcon={<UpdateDisabledRounded />} >
                            BACK
                        </Button>
                    </Link>
                </div>

                <div className="my-3">
                    <Button type="submit" fullWidth variant="contained" color="warning" >Submit</Button>
                </div>

            </Form >

            <Link className='mt-5' to={'/all-users'}>
                <Button color="warning" startIcon={<Group />} >
                    ALL USERS
                </Button>
            </Link>

        </>
    )
}
