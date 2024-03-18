export interface DateRange {
    startDate: Date;
    endDate: Date;
}

export type EventDetail = {
    title: string;
    description: string;
    location: string;
    participants?: string | undefined;
};

export type AllEvents = {
    inputEvents: EventDetail;
    dates: DateRange;
}

export default interface DateContextType {
    startDate: Date;
    endDate: Date;
    setStartDate: (date: Date) => void;
    setEndDate: (date: Date) => void;
    dateRanges: DateRange[];
    addDateRange: (newStartDate: Date, newEndDate: Date) => void;
    eventDetails: EventDetail[],
    addEventDetails: (details: EventDetail) => void;
    allEvents: AllEvents[];
}
