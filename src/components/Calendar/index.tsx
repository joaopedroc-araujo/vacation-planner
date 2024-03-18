import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import './styles.css'
import { useState } from 'react';
import DateModal from '../HolidayModal';
import Inputs from '../Inputs';
// import { DateContext } from '../../contexts/DateContext/DateContext';
const Calendars = () => {
    const localizer = momentLocalizer(moment);
    const [selectedDates, setSelectedDates] = useState<Array<Date | { start: Date; end: Date }>>([]);
    const [clickCount, setClickCount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [message, setMessage] = useState("Choose a starting date for your vacation:");
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const handleSelectSlot = ({ start, end }: { start: Date, end: Date }) => {
        if (clickCount === 0) {
            setStartDate(start);
            setClickCount(1);
            setMessage("Choose a ending date for your vacation:");
        } else {
            setEndDate(end);
            const selectedDateRange = {
                start: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()),
                end: new Date(end.getFullYear(), end.getMonth(), (end.getDate())),
            };
            setSelectedDates((prevSelectedDates) => [...prevSelectedDates, selectedDateRange]);
            setClickCount(0);
            setModalIsOpen(true);
            setMessage("Choose a starting date for your vacation:");
        }
    };

    console.log(selectedDates, endDate)

    return (
        <>
            <div>
                <p>{message}</p>
                <Calendar
                    localizer={localizer}
                    views={['month']}
                    selectable
                    onSelectSlot={handleSelectSlot}
                    style={{ height: 500, width: 800 }}
                    defaultView='month'
                    // onRangeChange={(range) => console.log(range)}
                    events={selectedDates} />
                {modalIsOpen && <DateModal
                    modalIsOpen={modalIsOpen}
                    Inputs={<Inputs />}
                    onApply={() => setModalIsOpen(false)} />
                }
            </div>
        </>
    )
}

export default Calendars;