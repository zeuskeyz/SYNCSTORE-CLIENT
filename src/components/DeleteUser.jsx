import { DeleteForeverRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import Axios from 'axios'
import { URL } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export const DeleteUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        Axios.post(`${URL}/user/${id}`, {id}).then(res => toast(res.data)).then(navigate('/all-users'))
    }

    return (
        <>
            <Button endIcon={<DeleteForeverRounded />} className="text-uppercase fs-6" onClick={handleDelete}>
                DELETE USER
            </Button>

        </>
    )
}
