import { useCalendar } from "../../hooks/useCalendar"
import { Card, CardContent, Typography, Grid } from "@mui/material"
import { format } from "date-fns"

const Day = () => {

    const { startMonth } = useCalendar()

    return (
        <>
            <Card >
                <Grid display="flex" justifyContent="space-between" alignItems="center" size="grow">
                    <CardContent>
                        <Typography variant="h6">
                            TODAY
                        </Typography>
                        {/*
                                <Typography variant="h4">
                                    {format(startMonth, 'MM')} <- acá debería decir el nombre y no el numero
                                </Typography>
                                */}
                        <Typography variant="h2">
                            {format(startMonth, 'dd')}
                        </Typography>
                    </CardContent>
                </Grid>
            </Card>
        </>
    )
}

export default Day