import { Button, Chip, Typography } from "@mui/material"
import { EmptyTasks } from "./EmptyTasks"
import { useEffect, useState } from "react";
import Axios from 'axios'
import { URL } from "../App";
import { Paginate } from "./Paginate";
import { Link } from "react-router-dom";

export const PendingTasks = () => {
    const styles = { boxShadow: '15px -15px 15px rgba(0,0,0,0.1) , 15px 15px 15px rgba(255,255,255,0.2)'}

    const [tasks, setTasks] = useState([])

    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(tasks.length / postsPerPage)


    useEffect(() => { Axios.get(`${URL}/picked-tasks`).then((res) => { setTasks(res.data) })}, [tasks])

    let results = tasks?.slice(firstIndex, lastIndex).map((task) =>
        <Button color='warning' style={styles} size="large" className='col-4 border-0 p-4 flex-column justify-context-evenly' id={task._id} key={task._id} >
            <Link to={`/close-task/${task._id}`} className="fs-4 stretched-link">{task.name.toUpperCase()}</Link>
            <div className="my-3">squad : {task.audience}</div>
            <Typography className="text-lowercase fst-italic">tasked by : {task.creator}</Typography>
        </Button>
    )

    return (
        <>
            <Chip color='warning' className="mb-3" label='PENDING TASKS' />

            <div className="column my-1">
                <div className="row">
                    {tasks?.length ? results : <EmptyTasks />}
                </div>
                <div className='mt-1 col-12 text-center'>
                    <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
                </div>
            </div>
        </>
    )
}