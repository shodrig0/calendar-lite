import * as React from "react"
import { useDrag } from "react-dnd"
import { Box } from "@mui/material"

type Props = {
    title: string
}

const DragTask = React.forwardRef<HTMLDivElement, Props>(({ title }, ref) => {
    const [{ isDragging }, drag] = useDrag({
        type: "TASK",
        item: { title },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const combinedRef = (node: HTMLDivElement | null) => {
        drag(node)
        if (ref && typeof ref === "function") {
            ref(node)
        } else if (ref && typeof ref === "object") {
            (ref as React.RefObject<HTMLDivElement | null>).current = node
        }
    }

    return (
        <Box
            ref={combinedRef}
            sx={{
                position: "relative",
                backgroundColor: "primary.main",
                cursor: "pointer",
                borderRadius: 2,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                color: "#fff",
                fontWeight: "bold",
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {title}
        </Box>
    )
})

export default DragTask