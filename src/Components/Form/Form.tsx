import * as React from "react"
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { CalendarContext } from "../../contexts/CalendarContext"
import { format } from "date-fns"

/* is it necessary?
interface Props {
    name: string
    label: string
    value: string | number
    tasks: TaskType[] // check
}
*/

const Form = () => {

    const calendar = React.useContext(CalendarContext)

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    backgroundColor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField id="task-title" label="Add task" variant="outlined" placeholder="Enter task title" fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField id="task-description" label="Description" variant="outlined" placeholder="Enter task description" multiline rows={3} fullWidth />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="task-time-label">Time</InputLabel>
                    <Select id="task-time" labelId="task-time-label" defaultValue="">
                        {calendar?.hoursInDay.map((date, index) => (
                            <MenuItem key={index} value={date.getHours()}>
                                {format(date, 'HH')}:00
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField id="task-duration" label="Duration (hours)" type="number" variant="outlined" placeholder="Enter duration" fullWidth />
                </FormControl>
                <Button variant="contained" color="primary" fullWidth>
                    Add Task
                </Button>
            </Box>
        </>
    )
}

export default Form