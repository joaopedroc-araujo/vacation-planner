import { ReactNode, createContext, useState } from 'react';
import DateContextType from './DateInterface';

const DateContext = createContext<DateContextType | undefined>(undefined);

// Crie o provedor do contexto
const DateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const contextValue: DateContextType = {
        startDate,
        endDate,
        setStartDate,
        setEndDate,
    };

    return (
        <DateContext.Provider value={contextValue}>
            {children}
        </DateContext.Provider>
    );
};

export default DateProvider;
export { DateContext };