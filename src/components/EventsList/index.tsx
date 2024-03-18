import { useDateContext } from '../../contexts/DateContext/DateContext';

const EventsList = () => {
    const { eventDetails } = useDateContext()

    return (
        <div>
            <h1>Events List</h1>
            {(eventDetails).map((event, index) => {
                return (
                    <div key={index}>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>{event.location}</p>
                        <p>{event.participants}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default EventsList;