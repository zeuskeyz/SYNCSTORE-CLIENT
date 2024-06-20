import { Card, CardContent, Paper, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { EmptyTasks } from './EmptyTasks'
import { Paginate } from './Paginate'
import { UserContext } from '../contexts/UserContextProvider'

export const MyGroups = () => {

    const user = useContext(UserContext)

    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(user.squads?.length / postsPerPage)

    let result = user.squads?.slice(firstIndex, lastIndex).map((squad) =>

        <Card className={`col-${(12 / user.squads?.slice(firstIndex, lastIndex).length)} border-0 p-2`} key={squad._id} >
            <div className="border shadow py-4">
                <CardContent className='d-flex flex-column justify-content-evenly'>
                    <Typography>TEAM</Typography>
                    <Typography className='text-uppercase fw-bold d-block my-auto ' variant='h4'>{squad}</Typography>
                </CardContent>
            </div>
        </Card>

    )

    return (
        <>
            <div className="row g-1">
                {user.squads?.length ? result : <EmptyTasks />}
            </div>
            <Paper className='mt-3 col-12'>
                <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
            </Paper>

        </>
    )
}
