import { Paper, Typography } from "@mui/material"

export const MyTaskCarousel = () => {
    let squads = []
    let indicators = squads?.map((squad, index) => <button key={index} type="button" data-bs-target="#squad-display" data-bs-slide-to={index} className={`bg-dark mt-5 ${!index && 'active'}`} />)
    let innerCarousel = squads?.map((squad, index) =>

        <div className="carousel-inner" key={index} >

            <div className={`carousel-item ${!index && `active`}`} >
                <h1>{squad.toUpperCase()}</h1>
                <Typography>Group Description Goes Here</Typography>
            </div>

        </div>
    )

    return (
        <>

            <Paper elevation={2} id="squad-display" className="carousel slide carousel-fade p-3 h-100" data-bs-ride="carousel">
                <Typography className="mb-1" variant="h6">SQUADS</Typography>

                <div className="carousel-indicators mt-5 pt-5" >
                    {indicators}
                </div>

                {innerCarousel}

                <button className="carousel-control-prev" type="button" data-bs-target="#squad-display" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon "></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#squad-display" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </Paper>

        </>
    )
}
