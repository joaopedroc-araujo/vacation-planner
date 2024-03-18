import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import './styles.css'
import { useState } from 'react';
import { date } from 'yup';
// import { DateContext } from '../../contexts/DateContext/DateContext';
const Calendars = () => {
    const localizer = momentLocalizer(moment);
    const [selectedDates, setSelectedDates] = useState<Array<Date | { start: Date; end: Date }>>([]);
    const [clickCount, setClickCount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [message, setMessage] = useState("Choose your start date:");

    const handleSelectSlot = ({ start, end }: { start: Date, end: Date }) => {
        if (clickCount === 0) {
            setStartDate(start);
            setClickCount(1);
            setMessage("Choose a ending date:");
        } else {
            setEndDate(end);
            const selectedDateRange = {
                start: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()),
                end: new Date(end.getFullYear(), end.getMonth(), (end.getDate())),
            };
            setSelectedDates((prevSelectedDates) => [...prevSelectedDates, selectedDateRange]);
            setClickCount(0);
            setMessage("Choose a start date:");
        }
    };

    console.log(selectedDates, endDate)

    return (
        <div>
            <p>{message}</p>
            <Calendar
                localizer={localizer}
                views={['month']}
                selectable
                onSelectSlot={handleSelectSlot}
                style={{ height: 500, width: 800 }}
                defaultView='month'
                onRangeChange={(range) => console.log(range)}
                events={selectedDates}
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