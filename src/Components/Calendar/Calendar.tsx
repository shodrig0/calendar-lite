import { useContext } from "react"
import { CalendarContext } from "../../contexts/CalendarContext"
import { Typography, Box, Grid, Card, useTheme, useMediaQuery } from "@mui/material"
import { format, isToday } from "date-fns"
import Title from "../Title/Title"

const Calendar = () => {

    const calendar = useContext(CalendarContext)
    const theme = useTheme()
    const mobileDisplay = useMediaQuery(theme.breakpoints.down('sm'))

    if (!calendar) return null // -> salir

    const weeks: Date[][] = []

    for (let i: number = 0; i < calendar.allDaysInCalendar.length; i += 7) {
        weeks.push(calendar.allDaysInCalendar.slice(i, i + 7))
    }

    return (
        <>
            <Title title="Calendar" />
            <Typography textAlign="center">
                {format(calendar.startMonth, 'LLLL')}
            </Typography>
            {/* <ThemeProvider theme={themeCard}> */}
            <Card variant="outlined" sx={{}}>
                <Grid container columns={7} spacing={0.02} sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                    {calendar.daysInWeek.map((date, index) => (
                        <Box key={index} sx={{ flex: 1, textAlign: 'center', p: 1 }}>
                            <Typography>
                                {mobileDisplay ? format(date, 'EEE') : format(date, 'EEEE')}
                            </Typography>
                        </Box>
                    ))}
                </Grid>

                {weeks.map((week, index) => (
                    <Grid container columns={7} spacing={0.5} key={index} sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                        {week.map((date, index) => {
                            const today = isToday(date)
                            return (
                                <Box key={index} sx={{ flex: 1, textAlign: 'center', p: 1, backgroundColor: today ? 'primary.main' : 'transparent', color: today ? 'white' : 'text.primary', borderRadius: 2, cursor: today ? 'pointer' : 'default' }}>
                                    <Typography>
                                        {format(date, 'd')}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Grid>
                ))}
            </Card>
            {/* </ThemeProvider > */}
        </>
    )
}

export default Calendar
