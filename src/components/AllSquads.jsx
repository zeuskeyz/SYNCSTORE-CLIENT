import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import Axios from 'axios'
import { EmptyTasks } from "./EmptyTasks"
import { Button, CardContent, Chip, Typography } from '@mui/material'
import { Paginate } from './Paginate'

export const AllSquads = () => {
    const navigate = useNavigate()
    const styles = { boxShadow: '15px -15px 15px rgba(0,0,0,0.1) , 15px 15px 15px rgba(255,255,255,0.2)' }

    const [groups, setGroups] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(groups.length / postsPerPage)

    const handleDelete = (event) => { Axios.post(`${URL}/delete-squad/${event.target.id}`).then(navigate('/all-squads')) }

    useEffect(() => { Axios.get(`${URL}/all-squads`).then(res => setGroups(res.data)) }, [groups])

    let result = groups?.slice(firstIndex, lastIndex).map(group =>
        <div style={styles} className='col-4 p-4 mb-2 flex-column justify-context-evenly' key={group._id}>
            <CardContent color='warning'>
                <Typography className='text-uppercase fw-bold d-block my-auto' variant='h5'>{group.name}</Typography>
                <Button color='warning' className='mt-3' id={group._id} onClick={handleDelete}>
                    DELETE SQUAD
                </Button>
            </CardContent>
        </div>
    )

    return (
        <>
            <Chip color='warning' className="" label='SHOP SQUADS' />

            <div className="container my-3">
                <div className="row p-2">
                    {groups.length ? result : <EmptyTasks />}
                </div>
                <div className="mb-3">
                    <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
                </div>

            </div>
        </>
    )
}
