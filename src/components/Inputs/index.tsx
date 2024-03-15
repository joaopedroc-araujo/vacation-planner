import React, { ChangeEvent, useContext } from 'react';
import { DateContext } from '../../contexts/DateContext/DateContext';

const Inputs: React.FC = () => {
    const { setStartDate, setEndDate } = useContext(DateContext);

    const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate);
    };

    const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newEndDate = event.target.value;
        setEndDate(newEndDate);
    };

    // console.log(startDate, endDate, dateRanges);

    return (
        <div>
            <input name='title' placeholder='Title' />
            <input name='description' placeholder='Description' />
            <input name='starting-date' type='date' onBlur={handleStartDateChange} />
            <input name='ending-date' type='date' onBlur={handleEndDateChange} />
            <input name='location' placeholder='Location' />
            <input name='participants' placeholder='Participants' />
        </div>
    )
}

export default Inputs;