import Axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import { useParams } from 'react-router-dom'
import { EmptyTasks } from './EmptyTasks'
import { Button, CardContent, Chip, Typography } from '@mui/material'
import toast from 'react-hot-toast'
import { Paginate } from './Paginate'

export const SquadsToAdd = () => {
    const { id } = useParams()
    const [groups, setGroups] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(groups.length / postsPerPage)


    useEffect(() => {
        Axios.get(`${URL}/user/${id}/add-squad`).then(res => setGroups(res.data))
    }, [id, groups])

    const handleAdd = (event) => { Axios.post(`${URL}/user/${id}/add-squad`, { squad: event.target.name }).then(res => toast(res.data)) }
    
    const styles = { boxShadow: '15px -15px 15px rgba(0,0,0,0.1) , 15px 15px 15px rgba(255,255,255,0.2)' }

    let result = groups?.slice(firstIndex, lastIndex).map(group =>

        <div style={styles} className='col-4 p-4 mb-2 flex-column justify-context-evenly' key={group._id}>
            <CardContent color='warning'>
                <Typography className='text-uppercase fw-bold d-block' variant='h5'>{group.name}</Typography>
                <Button color='warning' className='mt-3' name={group.name} id={group._id} onClick={handleAdd}>
                    ADD MEMBER
                </Button>
            </CardContent>
        </div>
    )

    return (
        <>
                <Chip color='warning' className="mb-3" label='SHOP SQUADS' />

                <div className="row p-2">
                    {groups.length ? result : <EmptyTasks />}
                </div>
                <div className="mb-3">
                    <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
                </div>

        </>
    )
}
