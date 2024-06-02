/* eslint-disable react/prop-types */
import { SkipNextRounded, SkipPreviousRounded } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"

export const Paginate = ({ pageNum, setPageNum, totalPages }) => {
    const handlePrev = () => setPageNum(pageNum - 1)
    const handleNext = () => setPageNum(pageNum + 1)

    return (
        <>
            <div className="d-flex align-items-baseline justify-content-center">
                <div className="">
                    <IconButton color='warning' disabled={pageNum == 1} onClick={handlePrev}>
                        <SkipPreviousRounded />
                    </IconButton>
                </div>
                <div className="mx-3">
                    <Typography>
                        Page {pageNum} of {totalPages}
                    </Typography>
                </div>
                <div className="">
                    <IconButton color='warning' disabled={pageNum === totalPages} onClick={handleNext}>
                        <SkipNextRounded />
                    </IconButton>
                </div>
            </div>


        </>
    )
}
