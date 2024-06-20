//import Axios from 'axios'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button, Chip, MenuItem, TextField } from '@mui/material'
import Axios from 'axios'
import { URL } from "../App"
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Group } from '@mui/icons-material'


export const SignUpForm = () => {

    const defaults = { username: "", email: "", shop: "", role: "", password: "", repeat: "" }
    const [pojo, setPojo] = useState(defaults)
    //const user = useContext(UserContext)

    const handleInput = event => setPojo(prev => { return { ...prev, [event.target.name]: event.target.value } })

    const handleSubmit = event => {

        event.preventDefault()
        Axios.post(`${URL}/new-user`, pojo).then(setPojo(defaults)).then(({ data }) => toast.success(data.note))

    }

    return (
        <>
            <Form className='container px-5 mx-5' onSubmit={handleSubmit}>

                <div className='mb-5'>
                    <Chip color="warning" label='CREATE NEW USER' Chip />
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

                <div className='row my-3'>
                    <div className="col-6">
                        <TextField required className="form-control" type="password" name="password" label="Password" variant="filled" color='warning' value={pojo.password} onChange={handleInput} />
                    </div>
                    <div className="col-6">
                        <TextField required className="form-control" type="password" name="repeat" label="Repeat Password" variant="filled" color='warning' value={pojo.repeat} onChange={handleInput} />
                    </div>
                </div>

                <div className="my-3">
                    <Button type="submit" fullWidth variant="contained" color="warning" >Submit</Button>
                </div>

                <Link className='my-5 mx-5' to={'/all-users'}>

                    <Button color="warning" startIcon={<Group />} >
                        ALL USERS
                    </Button>
                </Link>

            </Form >



        </>
    )
}
