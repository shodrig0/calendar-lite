import * as React from "react"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"

interface Props {
    prevMonth: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
    nextMonth: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const ChangeMonthBtn: React.FC<Props> = ({ prevMonth, nextMonth }) => {

    return (
        <>
            <ArrowBackIosNew onClick={prevMonth} />
            <ArrowForwardIos onClick={nextMonth} />
        </>
    )
}

export default ChangeMonthBtn