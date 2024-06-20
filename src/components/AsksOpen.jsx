import { Button, Chip, Typography } from "@mui/material"
import { EmptyTasks } from "./EmptyTasks"
import { useEffect, useState } from "react";
import Axios from 'axios'
import { URL } from "../App";
import { Paginate } from "./Paginate";

export const AsksOpen = () => {
    const styles = { boxShadow: '15px -15px 15px rgba(0,0,0,0.1) , 15px 15px 15px rgba(255,255,255,0.2)'}

    const [asks, setAsks] = useState([])

    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(asks.length / postsPerPage)

    useEffect(() => { Axios.get(`${URL}/open-asks`).then((res) => { setAsks(res.data) })}, [asks])

    const handleDelete = (event) => {Axios.post(`${URL}/open-asks`, {id: event.target.id})}

    let results = asks?.slice(firstIndex, lastIndex).map((ask) =>
        <Button onClick={handleDelete} color='warning' style={styles} size="large" className='col-4 border-0 p-4 flex-column justify-context-evenly' id={ask._id} key={ask._id} >
            <Typography onClick={handleDelete}>{ask.name.toUpperCase()}</Typography>
            <div onClick={handleDelete} className="my-3">squad : {ask.audience}</div>
            <Typography onClick={handleDelete} className="text-lowercase fst-italic" variant="caption"> {ask.details}</Typography>
        </Button>
    )

    return (
        <>
            <Chip color='warning' className="mb-3" label='PENDING TASKS' />

            <div className="column my-1">
                <div className="row">
                    {asks?.length ? results : <EmptyTasks />}
                </div>
                <div className='mt-1 col-12 text-center'>
                    <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
                </div>
            </div>
        </>
    )
}