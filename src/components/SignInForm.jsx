import { Button, Chip, Divider, TextField } from "@mui/material"
import { useState } from "react"
import { Form } from "react-bootstrap"

export const SignInForm = () => {

    const defaults = { username: "", password: "" }
    const [pojo, setPojo] = useState(defaults)

    const handleInput = event => setPojo(prev => {return {...prev, [event.target.name]: event.target.value }})

    const handleSubmit = event => {

        event.preventDefault()
        console.log(pojo)
        setPojo(defaults)
     }

    return (
        <>

            <Form className="container" onSubmit={handleSubmit} >
                <div className='my-3'>
                    <legend>USER SIGN IN</legend>
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
