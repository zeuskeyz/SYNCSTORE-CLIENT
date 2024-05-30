import { Typography } from "@mui/material"
import { EmptyTasks } from "./EmptyTasks"
import { useEffect, useState } from "react";
import Axios from 'axios'
import { URL } from "../App";

export const ShowTasks = () => {
    const [tasks, setTasks] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        Axios.get(`${URL}/open-tasks`).then((res) => { setTasks(res.data); }).then(setLoading(true))
    }, [tasks])

    return (
        <>
            {
                loading 
                ?  tasks?.length ? tasks?.map((task) => <Typography key={task._id}>{task.name}</Typography>) : <EmptyTasks />
                : <Typography>Loading...</Typography>
            }
        </>
    )
}
