import { Card, CardContent, Typography } from '@mui/material'

export const TaskCount = () => {
  return (
    <>
      <Card className="" elevation={3}>
        <CardContent>
          <Typography  className='fw-bold fs-4'>TASK TYPE</Typography>
          <Typography>NOW COUNT</Typography>
          <Typography>MTD COUNT</Typography>
          <Typography>YTD COUNT</Typography>
        </CardContent>
      </Card>
    </>
  )
}
