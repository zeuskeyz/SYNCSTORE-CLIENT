import { Send, Workspaces } from "@mui/icons-material"
import { Button, Chip, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Form } from "react-bootstrap"
import toast from "react-hot-toast"
import Axios from 'axios'
import { Link } from "react-router-dom"

export const AddSquad = () => {
    const defaults = { name: '', shop: '' }
    const [pojo, setPojo] = useState(defaults)

    const handleInput = event => setPojo(prev => { return { ...prev, [event.target.name]: event.target.value } })

    const handleSubmit = event => {

        event.preventDefault()
        Axios.post(`${URL}/add-add`, pojo).then(setPojo(defaults)).then(({ data }) => toast.success(data.note))

    }

    return (
        <>
            <Paper>
                <Form onSubmit={handleSubmit}>
                    <div className="">
                        <Chip label={<Typography>CREATE SQUAD</Typography>} color="warning" size='medium' />
                    </div>

                    <div>
                        <TextField required className="form-control" type="text" name="name" label="Squad Name" variant="filled" color='warning' value={pojo.name} onChange={handleInput} />
                        <TextField required className="form-control" type="text" name="shop" label="Squad Branch" variant="filled" color='warning' value={pojo.shop} onChange={handleInput} />
                    </div>
                    <div>
                        <Button type="submit" fullWidth variant="contained" color="warning" endIcon={<Send />}>SUBMIT</Button>
                    </div>

                </Form>

                <Link className='mt-5' to={'/all-squads'}>

                    <Button color="warning" startIcon={<Workspaces/>} >
                        ALL SQUADS
                    </Button>
                </Link>

            </Paper>

        </>
    )
}
