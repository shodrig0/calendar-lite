import * as React from "react"
import { Modal, ModalDialog, ModalClose, Button, Stack } from "@mui/joy"
import { CalendarContext } from "../../contexts/CalendarContext"
import { styled } from '@mui/material/styles'
import { format } from 'date-fns'

const DemoButton = styled(Button)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    textAlign: 'start',
    display: 'flex',
    justifyContent: 'flex-start',
    color: 'black',
    cursor: 'text'
}))

const AddTask = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const calendar = React.useContext(CalendarContext)

    return (
        <>
            <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
                {calendar?.hoursInDay.map((date, index) => (
                    <DemoButton onClick={() => setOpenModal(true)} key={index} variant="solid">
                        {format(date, 'H')}
                    </DemoButton>
                ))}
            </Stack>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <ModalDialog>
                    <ModalClose />
                    Content
                </ModalDialog>
            </Modal>
        </>
    )
}

export default AddTask