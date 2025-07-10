import * as React from "react"
import { Typography } from "@mui/material"

interface Props {
    title: string
}

const Title: React.FC<Props> = ({ title }) => {
    return (
        <Typography variant="h5">{title}</Typography>
    )
}

export default Title