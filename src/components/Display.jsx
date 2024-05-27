import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button } from "@mui/material"

export const Display = () => {
    return (
        <>
            <Accordion>

                <AccordionSummary expandIcon={<ExpandMore/>} aria-controls="panel3-content" id="panel3-header">
                    Accordion Actions
                </AccordionSummary>

                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>

                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>

            </Accordion>

        </>
    )
}
