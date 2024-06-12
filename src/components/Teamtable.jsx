import Axios from 'axios'
import { useEffect, useState } from "react"
import { URL } from "../App"
import { Paginate } from "./Paginate"
import { ManageAccountsRounded } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export const Teamtable = () => {

    const [rows, setRows] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage
    const totalPages = Math.ceil(rows.length / postsPerPage)

    useEffect(() => {
        Axios.get(`${URL}/all-users`).then(({ data }) => setRows(data))
    }, [rows])

    return (
        <>

            <table className="table table-hover table-warning">
                <thead>
                    <tr>
                        <th>USER</th>
                        <th>EMAIL</th>
                        <th>SHOP</th>
                        <th>ROLE</th>
                        <th>STARTED</th>
                        <th>ACTION</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        rows?.slice(firstIndex, lastIndex).map( row =>

                            <tr key={row._id} >

                                <td>{row.username}</td>
                                <td>{row.email}</td>
                                <td>{row.shop}</td>
                                <td>{row.role}</td>
                                <td>{row.createdAt}</td>
                                <td>  
                                    <Link to={`/user/${row._id}`} className='text-decoration-none text-dark mx-3'>
                                        <Button startIcon={<ManageAccountsRounded/>}>MANAGE</Button>
                                    </Link>    
                                </td>
                            </tr>

                        )
                    }

                </tbody>

            </table >

            <div className="my-3">
                <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
            </div>
        </>
    )
}
