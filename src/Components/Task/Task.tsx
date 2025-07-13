import Title from "../Title/Title"
import AddTask from "../AddTask/AddTask"
import { Typography, Card } from "@mui/material"
// import { styled } from '@mui/material/styles'

// const ContainerTask = styled(Card)(({ theme }) => ({
//     width: '100%',
//     ...theme.typography.body2,
//     backgroundColor: 'black',
// }))

const Task = () => {
    return (
        <>
            <Title title="Tasks" />
            <Typography>Create a task</Typography>
            <Card variant="elevation" sx={{ width: '100%', maxWidth: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
                <AddTask />
            </Card>
        </>
    )
}

export default Task