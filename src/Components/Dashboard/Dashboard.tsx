import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/joy"
import { styled } from "@mui/material/styles"
import Calendar from "../Calendar/Calendar"
import Day from "../Day/Day"
import Task from "../Task/Task"

const DemoBox = styled(Box)(() => ({
    minWidth: 320,
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
}))

const Dashboard = () => {

    const mobileDisplay = useMediaQuery('(max-width:349px)')

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap', gap: 2, width: '100%', textAlign: 'center', overflowX: 'hidden' }} >
                <DemoBox>
                    {mobileDisplay ? <Day /> : <Calendar />}
                </DemoBox>

                <DemoBox>
                    <Task />
                </DemoBox>
            </Box>
        </>
    )
}

export default Dashboard