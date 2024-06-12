import { ManageAccounts, PersonPinRounded, WorkHistoryRounded } from "@mui/icons-material"
import { Button, Card, CardContent, Paper } from "@mui/material"

export const UserCard = () => {

    return (
        <>
            <div className="">
                <Paper elevation={3} className="">
                    <Card variant='' className="">
                        <CardContent className="">
                            <div><ManageAccounts className="fs-1" /></div>
                            <div>
                                <Button className="text-uppercase fs-1 display-3 my-0 py-0">
                                    SHEZRON
                                </Button>
                            </div>
                            <div>
                                <Button startIcon={<WorkHistoryRounded />} className="text-lowercase fs-5">
                                    shezron@email.com
                                </Button>
                            </div>
                            <div>
                                <Button startIcon={<PersonPinRounded />} className="text-uppercase fs-6 my-0">
                                    SILAS HEZRON
                                </Button>
                            </div>
                            <div>
                                <Button startIcon={<WorkHistoryRounded />} className="text-uppercase fs-6">
                                    ADMIN | MIGORI
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Paper>

            </div>

        </>
    )
}
