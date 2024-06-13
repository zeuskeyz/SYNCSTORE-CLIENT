import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import Axios from 'axios'
import { EmptyTasks } from "./EmptyTasks"
import { Chip } from '@mui/material'

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
        <Chip className='p-3 m-2' key={group._id} id={group._id} label={group.name} variant="outlined" onDelete={handleDelete} />
    ))

    return (
        <>
            {groups.length ? results : <EmptyTasks />}
        </>
    )
}
