import Title from "../Title/Title"
import AddTask from "../AddTask/AddTask"
import { Typography, Sheet } from "@mui/joy"
import { styled } from '@mui/material/styles'

const ContainerTask = styled(Sheet)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    backgroundColor: 'black'
}))

const Task = () => {
    return (
        <>
            <Title title="Tasks" />
            <Typography>Create a task</Typography>
            <ContainerTask>
                <AddTask />
            </ContainerTask>
        </>
    )
}

export default Task