// import { useCalendar } from "../../hooks/useCalendar"
import { useContext } from "react"
import { CalendarContext } from "../../contexts/CalendarContext"
import ChangeMonthBtn from "../Buttons/ChangeMonthBtn/ChangeMonthBtn"
import Title from "../Title/Title"

const Header = () => {

    const calendar = useContext(CalendarContext)
    return (
        <>
            <ChangeMonthBtn
                prevMonth={calendar?.getPrevMonth ?? (() => { })}
                nextMonth={calendar?.getNextMonth ?? (() => { })}
            />
            <Title title="Header"></Title>
        </>
    )
}

export default Header