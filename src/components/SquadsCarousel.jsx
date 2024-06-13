import { Typography } from "@mui/material"

export const SquadsCarousel = () => {
    return (
        <>
            <div elevation={2} id="squad-display" className="carousel slide p-3" data-bs-ride="carousel">
                <Typography className="mb-2 text-underline" variant="h5">SQUADS</Typography>

                <div className="carousel-indicators mt-5">
                    <button type="button" data-bs-target="#squad-display" data-bs-slide-to="0" className="bg-dark active"></button>
                    <button type="button" data-bs-target="#squad-display" data-bs-slide-to="1" className="bg-dark"></button>
                    <button type="button" data-bs-target="#squad-display" data-bs-slide-to="2" className="bg-dark"></button>
                </div>
                <div className="carousel-inner mb-4">
                    <div className="carousel-item active my-1">
                        <h1>Team Migori</h1>
                        <p>Group Description Goes Here</p>
                    </div>
                    <div className="carousel-item my-1">
                        <h1>Back Office Team</h1>
                        <p>Group Description Goes Here</p>
                    </div>
                    <div className="carousel-item my-1">
                        <h1>Stock Controllers</h1>
                        <p>Group Description Goes Here</p>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#squad-display" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon "></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#squad-display" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </>
    )
}
