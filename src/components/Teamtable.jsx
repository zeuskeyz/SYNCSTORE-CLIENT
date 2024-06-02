import Axios from 'axios'
import { useEffect, useState } from "react"
import { URL } from "../App"
import { Paginate } from "./Paginate"
import { IconButton } from "@mui/material"
import { GroupAddRounded, ManageAccountsRounded, PersonAdd, PersonRemoveRounded } from "@mui/icons-material"
import { Header } from './Header'
import { Link } from 'react-router-dom'

export const Teamtable = () => {

    const [rows, setRows] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    const lastIndex = postsPerPage * pageNum
    const firstIndex = lastIndex - postsPerPage

    const totalPages = Math.ceil(rows.length / postsPerPage)

    //HEADER NAVLINK DETAILS
    const links = { link: '/new-user', name: 'Add User', icon: <PersonAdd /> }

    useEffect(() => {
        Axios.get(`${URL}/all-users`).then(({ data }) => setRows(data))
    }, [rows])

    return (
        <>

            <div className="d-flex flex-column justify-content-center mx-5 px-5 my-3">
                <Header newUser={links} />

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
                            rows?.slice(firstIndex, lastIndex).map(row =>
                                <tr key={row._id} >

                                    <td>{row.username}</td>
                                    <td>{row.email}</td>
                                    <td>{row.shop}</td>
                                    <td>{row.role}</td>
                                    <td>{row.createdAt}</td>
                                    <td>
                                        <Link to={`/edit-user/${row._id}`}>
                                            <IconButton color="warning"> <ManageAccountsRounded /> </IconButton>
                                        </Link>
                                        <Link to={`/delete-user/${row._id}`}>
                                            <IconButton color="warning"> <PersonRemoveRounded /> </IconButton>
                                        </Link>
                                        <Link to={`/add-squads/${row._id}`}>
                                            <IconButton color="warning"> <GroupAddRounded /> </IconButton>
                                        </Link>

                                    </td>
                                </tr>

                            )
                        }

                    </tbody>

                </table>
            </div>

            <div className="my-3">
                <Paginate pageNum={pageNum} setPageNum={setPageNum} setPostsPerPage={setPostsPerPage} totalPages={totalPages} />
            </div>
        </>
    )
}
