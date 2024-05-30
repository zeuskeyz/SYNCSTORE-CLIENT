import { Button, Chip, Divider, TextField, Typography } from "@mui/material"
import { Form } from "react-bootstrap"
import { useState } from "react"
import Axios from "axios"
import { URL } from "../App"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const SignInForm = () => {

    const defaults = { username: "", password: "" }
    const [pojo, setPojo] = useState(defaults)
    const navigate = useNavigate()

    const handleInput = event => setPojo(prev => {return {...prev, [event.target.name]: event.target.value }})

    const handleSubmit = event => {
        event.preventDefault()
        Axios.post(`${URL}/`, pojo)
        .then(({data}) => {
            toast.success(data.note)
            console.log(data)
            data.valid ? navigate('/homepage') : navigate('/')
        }).catch(err => toast.error(err.message))
    }
    
    return (
        <>

            <Form className="container" onSubmit={handleSubmit} >
                <div className='my-3 mx-5 px-5'>
                    <Chip label={<Typography variant="body1">LOGIN TO SYNCTASK</Typography>} size='medium' color="warning" />
                </div>

                <div className="my-3 mx-5 px-5">
                    <TextField className="form-control" type="text" name="username" label="Enter Username" variant="filled" color='warning' value={pojo.username} onChange={handleInput} />
                </div>

                <div className="my-3 mx-5 px-5">
                    <TextField className='form-control' type="password" name="password" label="Enter Password" variant="filled" color='warning' value={pojo.password} onChange={handleInput} />
                </div>

                <div className="my-3 mx-5 px-5">
                    <Divider>
                        <Chip clickable size="medium" variant="outlined" component="a" color="warning" label="Forgot Password...?" />
                    </Divider>                
                </div>

                <div className="my-3 mx-5 px-5">
                    <Button type="submit" fullWidth variant="contained" color="warning" >Submit</Button>
                </div>

            </Form>
        </>
    )
}
