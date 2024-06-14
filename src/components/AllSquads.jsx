import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import Axios from 'axios'
import { EmptyTasks } from "./EmptyTasks"
import { Button } from '@mui/material'
import { CancelRounded } from '@mui/icons-material'

export const AllSquads = () => {
    const navigate = useNavigate()
    const [groups, setGroups] = useState([])

    const handleDelete = (event) => {
        console.log(event.target)
        Axios.post(`${URL}/delete-squad/${event.target.id}`).then(navigate('/all-squads'))
    }

    useEffect(() => {
        Axios.get(`${URL}/all-squads`).then(res => setGroups(res.data))
    }, [groups])

    let results = groups.map(group => (
        <Button className='m-2 rounded-pill' key={group._id} id={group._id} variant="outlined" onClick={handleDelete} endIcon={<CancelRounded/>}>
            {group.name}
        </Button>
    ))

    return (
        <>
            {groups.length ? results : <EmptyTasks />}
        </>
    )
}
