import { Send, Workspaces } from "@mui/icons-material"
import { Button, Chip, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Form } from "react-bootstrap"
import toast from "react-hot-toast"
import Axios from 'axios'
import { Link } from "react-router-dom"
import { URL } from "../App"

export const AddSquad = () => {
    const defaults = { name: '', shop: '' }
    const [pojo, setPojo] = useState(defaults)

    const handleInput = event => setPojo(prev => { return { ...prev, [event.target.name]: event.target.value } })

    const handleSubmit = event => {

        event.preventDefault()
        console.log(pojo)
        Axios.post(`${URL}/new-squad`, pojo).then(setPojo(defaults)).then(({ data }) => toast.success(data.note))

    }

    return (
        <>
            <div className="p-5">
                <Form onSubmit={handleSubmit} className="mx-5">
                    <div className="">
                        <Chip label={<Typography>CREATE SQUAD</Typography>} color="warning" size='medium' />
                    </div>

                    <div className="m-3">
                        <TextField required className="form-control mb-3" type="text" name="name" label="Squad Name" variant="filled" color='warning' value={pojo.name} onChange={handleInput} />
                        <TextField required className="form-control mb-3" type="text" name="shop" label="Squad Branch" variant="filled" color='warning' value={pojo.shop} onChange={handleInput} />
                    </div>

                    <div className="m-3">
                        <Button type="submit" fullWidth variant="contained" color="warning" endIcon={<Send />}>SUBMIT</Button>
                    </div>

                </Form>

                <Link className='mt-5' to={'/all-squads'}>

                    <Button color="warning" startIcon={<Workspaces/>} >
                        ALL SQUADS
                    </Button>
                </Link>

            </div>

        </>
    )
}
