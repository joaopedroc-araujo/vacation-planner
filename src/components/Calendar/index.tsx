import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/sass/styles.scss';
import './styles.css'

const Calendars = () => {
    const localizer = momentLocalizer(moment);

    return (
        <>
            <Calendar
                localizer={localizer}
                view='month'
                views={['month']}
                allDayMaxRows={7}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: 800 }}
            />
        </>
    )
}

export default Calendars;
