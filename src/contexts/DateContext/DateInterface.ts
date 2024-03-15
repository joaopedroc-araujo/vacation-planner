export interface DateRange {
    startDate: string;
    endDate: string;
}
export default interface DateContextType {
    startDate: string;
    endDate: string;
    setStartDate: (date: string) => void;
    setEndDate: (date: string) => void;
    dateRanges: DateRange[];
    addDateRange: (newStartDate: string, newEndDate: string) => void;
}
