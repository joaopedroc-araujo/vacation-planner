import { BryntumCalendar } from '@bryntum/calendar-react'

const Calendar = () => {
    const config = {
        features: {
            timeRanges: true,
            eventEdit: {
                items: {
                    descriptionField: {
                        type: 'textArea',
                        name: 'description',
                        label: 'Description',
                        required: true,
                    },
                    locationField: {
                        type: 'text',
                        name: 'location',
                        label: 'Location',
                        required: true,
                    },
                    participantsField: {
                        type: 'text',
                        name: 'participants',
                        label: 'Participants',
                    },
                    startTimeField: false,
                    endTimeField: false,
                    resourceField: false,
                    recurrenceCombo: false,
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