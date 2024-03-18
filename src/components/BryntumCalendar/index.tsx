import { BryntumCalendar } from '@bryntum/calendar-react'

const Calendar = () => {
    const config = {
        features: {
            timeRanges: true,
            eventEdit: {
                items: {
                    locationField: {
                        type: 'text',
                        name: 'location',
                        label: 'Location',
                        required: true,
                        colorField: true,
                    },
                    descriptionField: {
                        type: 'textArea',
                        name: 'description',
                        label: 'Description',
                        required: true,
                        colorField: true,
                    },
                    participantsField: {
                        type: 'text',
                        name: 'participants',
                        required: true,
                        label: 'Participants',
                        colorField: true,
                    },
                    checkbox: false,
                    startTimeField: false,
                    endTimeField: false,
                    resourceField: false,
                    recurrenceCombo: false,
                    colorField: true,
                    allDayField: false,
                }
            }
        },
        timeRanges: [],
        modes: {
            year: true,
            month: true,
            week: false,
            day: false,
        },
    }

    return (
        <>
            <BryntumCalendar
                {...config}
            />
        </>
    );
}

export default Calendar;