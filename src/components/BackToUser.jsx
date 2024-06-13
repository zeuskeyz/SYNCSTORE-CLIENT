import { UpdateDisabledRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom'

export const BackToUser = () => {
    const { id } = useParams()

    return (
        <div>
            <Link className='mt-5' to={`/user/${id}`}>
                <Button color="warning" startIcon={<UpdateDisabledRounded />} >
                    BACK
                </Button>
            </Link>
        </div>
    )
}
