import { Button, MenuItem, TextField } from '@mui/material'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

export const SignUpForm = () => {
   
    const defaults = {username:"", email:"",shop:"",type:"", password:"",repeat:"" }
    const [data, setData] = useState(defaults)

    const handleInput = event => setData(prev => {return {...prev, [event.target.name]: event.target.value }})

    const handleSubmit = event => {
        event.preventDefault()
        console.log(data)
        setData(defaults)
     }

    return (
        <>
            <Form className='container' onSubmit={handleSubmit}>

                <div className='my-3'>
                    <legend>CREATE NEW USER</legend>
                </div>

                <div className='row my-3'>
                    <div className="col-6">
                        <TextField className="form-control" type="text" name="username" label="Enter Username" variant="filled" color='warning' value={data.username} onChange={handleInput} />
                    </div>
                    <div className="col-6">
                        <TextField className='form-control' type="email" name="email" label="Email Address" variant="filled" color='warning' value={data.email} onChange={handleInput} />
                    </div>
                </div>

                <div className='row my-3'>
                    <div className='col-6'>
                        <TextField className="form-control" type="text" name="shop" label="Shop Code" variant="filled" color='warning' value={data.shop} onChange={handleInput} />
                    </div>
                    <div className="col-6">
                        <TextField className="form-control text-start" select type="text" name="type" label="Select Role" variant="filled" defaultValue="" color='warning' value={data.type} onChange={handleInput}>
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                        </TextField>
                    </div>
                </div>

                <div className='row my-3'>
                    <div className="col-6">
                        <TextField className="form-control" type="password" name="password" label="Password" variant="filled" color='warning' value={data.password} onChange={handleInput} />
                    </div>
                    <div className="col-6">
                        <TextField className="form-control" type="password" name="repeat" label="Repeat Password" variant="filled" color='warning' value={data.repeat} onChange={handleInput} />
                    </div>
                </div>

                <div className="my-3">
                    <Button type="submit" fullWidth variant="contained" color="warning" >Submit</Button>
                </div>

            </Form >

        </>
    )
}
