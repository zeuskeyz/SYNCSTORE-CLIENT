import { Card, Typography } from '@mui/material'

export const TaskCount = () => {
  return (
    <>
        <Card>
            <Typography className='fw-bold fs-3'>TASK TYPE</Typography>
            <Typography>NOW COUNT</Typography>
            <Typography>WTD COUNT</Typography>
            <Typography>MTD COUNT</Typography>
            <Typography>YTD COUNT</Typography>
        </Card>
    </>
  )
}
