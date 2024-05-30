import { CircularProgress } from "@mui/material"

export const Spinner = () => {
    return (
        <div className="container d-flex align-items-center justify-content-between">
            <CircularProgress color="success" />
        </div>
    )
}
