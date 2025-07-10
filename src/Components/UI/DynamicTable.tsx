import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'

const DynamicTable = styled(Table)(({ theme }) => ({
    minWidth: 250,
    [theme.breakpoints.down('sm')]: {
        minWidth: '100%',
        fontSize: '0.75rem',
    }
}))

export default DynamicTable