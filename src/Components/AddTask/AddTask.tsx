import * as React from "react"
import { Modal, Box, Typography, Card } from "@mui/material"
import { CalendarContext } from "../../contexts/CalendarContext"
import { format } from 'date-fns'
// import type { TaskItem } from "../../types/task"
import { mockTask } from "../../mock/mockTask"
import Form from "../Form/Form"

const AddTask = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    // const [tasks] = React.useState<TaskItem[]>([])
    const calendar = React.useContext(CalendarContext)

    return (
        <>
            <Card
                variant="outlined"
                sx={{ position: 'relative', height: '50vh', textAlign: 'left', overflowY: 'auto' }}
                onClick={() => setOpenModal(true)}
            >
                {calendar?.hoursInDay.map((date, index) => {
                    const taskAtHour = mockTask.find((task) => task.startTask === index)
                    return (
                        <Box key={index} sx={{ borderBottom: '1px solid gray', px: 0.5, py: 1, cursor: 'crosshair' }}>
                            <Typography  >
                                {format(date, 'HH')}:00
                            </Typography>
                            {taskAtHour && (
                                <Box sx={{ position: 'relative', backgroundColor: 'primary.main', cursor: 'pointer', borderRadius: 2, top: 0, left: 0, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', color: '#fff', fontWeight: 'bold' }} onClick={(event) => event.stopPropagation()}>
                                    <Typography sx={{ px: 2 }}>
                                        {taskAtHour.title}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    )
                })}
            </Card>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Form />
            </Modal>
        </>
    )
}



export default AddTask