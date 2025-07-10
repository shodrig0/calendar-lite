import { Grid, useMediaQuery } from "@mui/material"
import Calendar from "../Calendar/Calendar"
import Day from "../Day/Day"
import Task from "../Task/Task"

const Dashboard = () => {

    const mobileDisplay = useMediaQuery('(max-width:349px)')

    return (
        <>
            <Grid container spacing={2} sx={{ display: 'flex', textAlign: 'center', color: 'red' }}>
                <Grid>
                    {mobileDisplay ? <Day /> : <Calendar />}
                </Grid>
                <Grid>
                    <Task />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard