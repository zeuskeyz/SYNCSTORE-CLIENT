import Axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import { useParams } from 'react-router-dom'
import { EmptyTasks } from './EmptyTasks'
import { Chip } from '@mui/material'

export const SquadsToAdd = () => {
    const { id } = useParams()
    const [groups, setGroups] = useState([])

    useEffect(() => {

        Axios.get(`${URL}/user/${id}/add-squad`).then(res => setGroups(res.data))

    }, [id, groups])

    const handleAdd = () => { }

    let result = groups?.map(group =>
        <Chip className="p-3 m-2" size='medium' key={group._id} label={group.name} onClick={handleAdd} />
    )

    return (
        <>
            {
                groups.length ? result :  <EmptyTasks />
            }


        </>
    )
}
