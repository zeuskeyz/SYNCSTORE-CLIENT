import { Button, Card, CardContent, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { EmptyTasks } from './EmptyTasks'
import { Paginate } from './Paginate'
import toast from 'react-hot-toast'
import { URL } from '../App'

export const TaskCount = () => {
  const { id } = useParams()
  const [groups, setGroups] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)

  const lastIndex = postsPerPage * pageNum
  const firstIndex = lastIndex - postsPerPage
  const totalPages = Math.ceil(groups.length / postsPerPage)

  const handleDelete = (event) => { Axios.delete(`${URL}/user/${id}/delete-squad`, { squad: event.target.name }).then(res => toast(res.data)) }

  useEffect(() => { Axios.get(`${URL}/user/${id}`).then(res => setGroups(res.data.squads)) }, [groups, id])

  let result = groups?.slice(firstIndex, lastIndex).map(group =>

    <Card className={`col-${(12 / groups?.slice(firstIndex, lastIndex).length)} border-0 p-2`} key={group._id} >
      <div className="border shadow">
        <CardContent className='d-flex flex-column justify-content-evenly'>
          <Typography>TEAM</Typography>
          <Typography className='text-uppercase fw-bold d-block my-auto' variant='h5'>{group}</Typography>
          <Button color='warning' className='' name={group.name} onClick={handleDelete}>
            REMOVE USER
          </Button>
        </CardContent>
      </div>
    </Card>
  )

  return (
    <>
      <div>
        <div className="container g-1">
          <div className="row px-1">
            {groups.length ? result : <EmptyTasks />}
          </div>
        </div>
        <Paper className='my-1 col-12'>
          <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
        </Paper>
      </div>
        
    </>
  )
}
