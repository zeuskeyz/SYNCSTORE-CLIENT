import Axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import { useParams } from 'react-router-dom'
import { EmptyTasks } from './EmptyTasks'
import { Button } from '@mui/material'
import toast from 'react-hot-toast'

export const SquadsToAdd = () => {
    const { id } = useParams()
    const [groups, setGroups] = useState([])

    useEffect(() => {
        Axios.get(`${URL}/user/${id}/add-squad`).then(res => setGroups(res.data))
    }, [id, groups])

    const handleAdd = (event) => {
        Axios.post(`${URL}/user/${id}/add-squad`, { squad: event.target.name }).then(res => toast(res.data))
    }

    let result = groups?.map(group =>
        <Button key={group._id} name={group.name} variant='outlined' color='warning' className="fs-4 rounded-pill m-3 py-3" onClick={handleAdd}>
            {group.name}
        </Button>
    )

    return (
        <>
            {
                groups.length ? result : <EmptyTasks />
            }


        </>
    )
}
