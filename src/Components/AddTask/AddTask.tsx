import * as React from "react"
import type { TaskType } from "../../types/task"
import { Modal, Box, Typography, TextField, Card, TextareaAutosize } from "@mui/material"
import { CalendarContext } from "../../contexts/CalendarContext"
import { format } from 'date-fns'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import EditNoteIcon from '@mui/icons-material/EditNote'

const AddTask = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [tasks] = React.useState<TaskType[]>([])
    const calendar = React.useContext(CalendarContext)

    // const calculateHeight = (duration: number) => {
    //     const totalHeight = 1000
    //     return `${(duration / 24) * totalHeight}`
    // sx: top: calculateHeight(index), left: 0, <- typography hours
    // sx: top: calculateHeight(task.time), height: calculateHeight(task.duration), <- box
    // }

    return (
        <>
            <Card
                variant="outlined"
                sx={{ position: 'relative', height: '50vh', textAlign: 'left', overflowY: 'auto' }}
                onClick={() => setOpenModal(true)}
            >
                {calendar?.hoursInDay.map((date, index) => (
                    <Typography key={index} sx={{ borderBottom: '1px solid gray', px: 0.5, py: 1, cursor: 'crosshair' }}>
                        {format(date, 'HH')}:00
                    </Typography>
                ))}

                {tasks.map((task, index) => (
                    <Box key={index} sx={{ position: 'absolute', backgroundColor: 'primary.500' }}>
                        {task.title}
                    </Box>
                ))}

            </Card>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                    <TextField id="standard-basic" label="Add title" variant="standard" placeholder="Example 1" />
                    <TextareaAutosize id="modal-modal-description" style={{ marginTop: 2, width: '75%', height: 20 }} maxRows={4} />
                    <CheckCircleIcon />
                    <WatchLaterIcon />
                    <EditNoteIcon />
                </Box>
            </Modal>
        </>
    )
}

export default AddTask