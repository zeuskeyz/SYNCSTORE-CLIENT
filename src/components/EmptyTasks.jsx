import { Typography } from "@mui/material"

export const EmptyTasks = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center py-5">
                <Typography className='mt-5 pt-5'> No Items Found!</Typography>
                <Typography className='mb-5 pb-5'>Please consider Adding Items...</Typography>
                
            </div>
        </>
    )
}
