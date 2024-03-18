import { ReactNode, createContext, useContext, useState } from 'react';
import DateContextType, { AllEvents, DateRange, EventDetail } from './DateInterface';

const DateContext = createContext<DateContextType | undefined>(undefined);

export const useDateContext = () => {
    const context = useContext(DateContext);
    if (!context) {
        throw new Error('useDateContext must be used within a DateProvider');
    }
    return context;
};

const DateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dateRanges, setDateRanges] = useState<DateRange[]>([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventDetails, setEventDetails] = useState<EventDetail[]>([]);
    const [allEvents, setAllEvents] = useState<AllEvents[]>([]);

    const addDateRange = (newStartDate: Date, newEndDate: Date) => {
        const newRange: DateRange = {
            startDate: newStartDate,
            endDate: newEndDate,
        };
        setDateRanges((prevDateRanges) => [...prevDateRanges, newRange]);
    };

    const addEventDetails = (details: EventDetail) => {
        setEventDetails((prevEventDetails) => [...prevEventDetails, details]);
    };

    const addAllEvents = (event: AllEvents) => {
        setAllEvents((prevAllEvents) => [...prevAllEvents, event]);
    };

    const value = {
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        dateRanges,
        addDateRange,
        eventDetails,
        addEventDetails,
        allEvents,
        addAllEvents,
    };

    return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export default DateProvider;
