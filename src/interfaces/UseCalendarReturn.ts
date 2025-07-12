export interface UseCalendarReturn {
    startMonth: Date
    daysInMonth: Date[]
    daysInWeek: Date[]
    allDaysInCalendar: Date[]
    hoursInDay: Date[]
    getPrevMonth: (event: React.MouseEvent<SVGSVGElement>) => void
    getNextMonth: (event: React.MouseEvent<SVGSVGElement>) => void
}