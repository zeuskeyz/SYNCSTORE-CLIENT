import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL } from '../App'
import Axios from 'axios'
import { EmptyTasks } from "./EmptyTasks"
import { Button, Card, CardContent, Chip, Typography } from '@mui/material'
import { Paginate } from './Paginate'

export const AllSquads = () => {
    const navigate = useNavigate()
    const [groups, setGroups] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(groups.length / postsPerPage)

    const handleDelete = (event) => {Axios.post(`${URL}/delete-squad/${event.target.id}`).then(navigate('/all-squads'))}

    useEffect(() => {Axios.get(`${URL}/all-squads`).then(res => setGroups(res.data))}, [groups])

    let result = groups?.slice(firstIndex, lastIndex).map(group =>

        <Card className="col-4 border border-0 p-2" key={group._id} >
            <div className="border shadow">
                <CardContent className='d-flex flex-column justify-content-evenly'>
                    <Typography className='text-uppercase fw-bold d-block my-auto' variant='h5'>{group.name}</Typography>
                    <Button color='warning' className='' id={group._id} onClick={handleDelete}>
                        DELETE SQUAD
                    </Button>
                </CardContent>

            </div>
        </Card>
    )

    return (
        <>
            <div className="my-3">
                <Chip color='warning' className="mb-3" label='SHOP SQUADS' />
                <div className="container my-3">
                    <div className="row g-2">
                        {groups.length ? result : <EmptyTasks />}
                    </div>
                </div>
                <div className="mt-5 mb-3">
                    <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
                </div>

            </div>
        </>
    )
}
