import React, { createContext } from "react"
import { useCalendar } from "../hooks/useCalendar"
import type { UseCalendarReturn } from "../interfaces/UseCalendarReturn"

type CalendarContextProviderProps = {
    children: React.ReactNode
}

const CalendarContext = createContext<UseCalendarReturn | null>(null)

export const CalendarContextProvider = ({ children }: CalendarContextProviderProps) => {

    const calendar = useCalendar()
    return <CalendarContext.Provider value={calendar}> {children} </CalendarContext.Provider>

}

export { CalendarContext }