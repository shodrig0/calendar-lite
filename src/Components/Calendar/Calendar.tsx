import { useContext } from "react"
import { CalendarContext } from "../../contexts/CalendarContext"
import { Typography, Box, Grid, Card } from "@mui/joy"
import { useTheme, useMediaQuery } from "@mui/material"
import { format, isToday } from "date-fns"
import Title from "../Title/Title"

const Calendar = () => {

    const calendar = useContext(CalendarContext)
    const theme = useTheme()
    const mobileDisplay = useMediaQuery(theme.breakpoints.down('sm'))

    if (!calendar) return null // -> exit

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
            <Card variant="plain" sx={{ width: '100%', maxWidth: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
                <Grid container columns={7} spacing={0.02} sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', width: '100%' }}>
                    {calendar.daysInWeek.map((date, index) => (
                        <Box key={`day-${index}`} sx={{ textAlign: 'center', px: 0.5, py: 1 }}>
                            <Typography>
                                {mobileDisplay ? format(date, 'EEE') : format(date, 'EEEE')}
                            </Typography>
                        </Box>
                    ))}

                    {calendar.allDaysInCalendar.map((date, index) => {
                        const today = isToday(date)
                        return (
                            <Box key={`date-${index}`} sx={{ textAlign: 'center', p: 1 }}>
                                <Typography
                                    level="body-sm"
                                    sx={{
                                        color: today ? '#fff' : 'text.primary',
                                        backgroundColor: today ? 'primary.500' : 'transparent',
                                        borderRadius: 5,
                                        cursor: today ? 'pointer' : 'default',
                                        p: 0.5
                                    }}
                                >
                                    {format(date, 'd')}
                                </Typography>
                            </Box>
                        )
                    })}
                </Grid>
            </Card>
        </>
    )
}

export default Calendar
