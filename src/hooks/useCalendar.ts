import * as React from "react"
import { format, startOfToday, parse, eachDayOfInterval, endOfMonth, add, endOfWeek, startOfWeek, startOfMonth, eachHourOfInterval, endOfDay } from "date-fns"
import type { UseCalendarReturn } from "../interfaces/UseCalendarReturn"

export const useCalendar = (): UseCalendarReturn => {
    const currentDay = startOfToday()
    const [currentMonth, setCurrentMonth] = React.useState<string>(() => format(currentDay, 'yyyy-MM-dd'))

    const startMonth = parse(currentMonth, 'yyyy-MM-dd', new Date())
    const endMonth = endOfMonth(startMonth)

    const startWeek = startOfWeek(startOfMonth(startMonth))
    const endWeek = endOfWeek(startWeek)

    const startCalendar = startOfWeek(startOfMonth(startMonth))
    const endCalendar = endOfWeek(endOfMonth(startMonth))

    const endDay = endOfDay(currentDay)

    const daysInMonth = eachDayOfInterval({
        start: startMonth,
        end: endMonth
    })

    const daysInWeek = eachDayOfInterval({
        start: startWeek,
        end: endWeek
    })

    const allDaysInCalendar = eachDayOfInterval({
        start: startCalendar,
        end: endCalendar
    })

    const hoursInDay = eachHourOfInterval({
        start: currentDay,
        end: endDay
    })

    const getPrevMonth = (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault()
        const firstDayPrevMonth = add(startMonth, { months: -1 })
        setCurrentMonth(format(firstDayPrevMonth, 'yyyy-MM-dd'))
    }

    const getNextMonth = (event: React.MouseEvent<SVGSVGElement>) => {
        event.preventDefault()
        const firstDayNextMonth = add(startMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM-dd'))
    }

    return { startMonth, daysInMonth, getPrevMonth, getNextMonth, daysInWeek, hoursInDay, allDaysInCalendar }
}