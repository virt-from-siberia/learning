export type DayFormatter = (day: Date) => Date | string
export type WeekFormatter = (week: Date[]) => Date[] | string

export class Calendar {
    constructor(firstWeekDay?: number)

    weekStartDate(date: Date): Date;

    monthDates(
        year: number,
        month: number,
        dayFormatter?: DayFormatter,
        weekFormatter?: WeekFormatter
    ): Date[]

    monthDays(
        year: number,
        month: number
    ): Date[]

    monthText(year?: number, month?: number): string
}