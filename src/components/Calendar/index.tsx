import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import './styles.css'
import { useState } from 'react';
// import { DateContext } from '../../contexts/DateContext/DateContext';

const Calendars = () => {
    const localizer = momentLocalizer(moment);
    // const { startDate, endDate } = useContext(DateContext);
    const [selectedDates, setSelectedDates] = useState<Array<Date | { start: Date; end: Date }>>([]);

    const handleSelectSlot = ({ start, end }: { start: Date, end: Date }) => {
        const selectedDateRange = {
            start: new Date(start.getFullYear(), start.getMonth(), start.getDate()),
            end: new Date(end.getFullYear(), end.getMonth(), end.getDate()),
        };

        setSelectedDates((prevSelectedDates) => [...prevSelectedDates, selectedDateRange]);
    };

    console.log(selectedDates)

    return (
        <div>
            <Calendar
                localizer={localizer}
                views={['month']}
                selectable
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelectSlot}
                style={{ height: 500, width: 800 }}
                defaultView='month'
                onRangeChange={(range) => console.log(range)}
                formats={{
                    dayFormat: 'D',
                    monthHeaderFormat: 'MMMM YYYY',
                    dayHeaderFormat: 'dddd',
                }}
            />
        </div>
    )
}

export default Calendars;
