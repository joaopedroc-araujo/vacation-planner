import { ReactNode, createContext, useContext, useState } from 'react';
import DateContextType, { DateRange } from './DateInterface';

const defaultContextValue: DateContextType = {
    startDate: "",
    endDate: "",
    setStartDate: () => { },
    setEndDate: () => { },
    dateRanges: [],
    addDateRange: () => { }
};

const DateContext = createContext<DateContextType>(defaultContextValue);


export const useDateContext = () => useContext(DateContext);

const DateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [dateRanges, setDateRanges] = useState<DateRange[]>([]);

    const addDateRange = (newStartDate: string, newEndDate: string) => {
        const newRange: DateRange = {
            startDate: newStartDate,
            endDate: newEndDate,
        };

        setDateRanges([...dateRanges, newRange]);
    };

    const contextValue: DateContextType = {
        startDate: "",
        endDate: "",
        setStartDate: (date: string) => setDateRanges(dateRanges => ({ ...dateRanges, startDate: date })),
        setEndDate: (date: string) => setDateRanges(dateRanges => ({ ...dateRanges, endDate: date })),
        dateRanges,
        addDateRange,
    };

    return (
        <DateContext.Provider value={contextValue}>
            {children}
        </DateContext.Provider>
    );
};

export default DateProvider;
export { DateContext };