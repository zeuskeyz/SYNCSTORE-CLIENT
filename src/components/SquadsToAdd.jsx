import Axios from 'axios'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import { useParams } from 'react-router-dom'
import { EmptyTasks } from './EmptyTasks'
import { Button, Card, CardContent, Chip, Typography } from '@mui/material'
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

    const handleAdd = (event) => {Axios.post(`${URL}/user/${id}/add-squad`, { squad: event.target.name }).then(res => toast(res.data))}

    let result = groups?.slice(firstIndex, lastIndex).map(group =>

        <Card className="col-4 border border-0 p-2" key={group._id} >
            <div className="border shadow">
                <CardContent className='d-flex flex-column justify-content-evenly'>
                    <Typography>TEAM</Typography>
                    <Typography className='text-uppercase fw-bold d-block my-auto' variant='h5'>{group.name}</Typography>
                    <Button color='warning' className='' name={group.name} onClick={handleAdd}>
                        ADD USER
                    </Button>
                </CardContent>

            </div>
        </Card>
    )

    return (
        <>
            <div>
                <Chip color='warning' className="mb-3" label='CLICK ON THE SQUAD TO ADD USER' />
                <div className="container">
                    <div className="row g-2">
                        {groups.length ? result : <EmptyTasks />}
                    </div>
                </div>
                <div className="my-3">
                    <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
                </div>

            </div>
        </>
    )
}
