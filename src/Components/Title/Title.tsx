import * as React from "react"
import { Typography } from "@mui/joy"

interface Props {
    title: string
}

const Title: React.FC<Props> = ({ title }) => {
    return (
        <Typography level="h2">{title}</Typography>
    )
}

export default Title