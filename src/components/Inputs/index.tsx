import React, { ChangeEvent, useEffect } from 'react';
import { useDateContext } from '../../contexts/DateContext/DateContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

const Inputs: React.FC = () => {
    const {
        register,
        handleSubmit,
        trigger,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { setStartDate, setEndDate } = useDateContext();

    useEffect(() => {
        for (const fieldName in schema.fields) {
            register(fieldName as keyof typeof schema.fields);
        }
    }, [register]);


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
            <input
                placeholder='Title'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("title", event.target.value);
                    trigger("title");
                }}
            />
            {errors.title && <p>{errors.title?.message}</p>}

            <input
                placeholder='Description'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("description", event.target.value);
                    trigger("description");
                }}
            />
            {errors.description && <p>{errors.description?.message}</p>}

            <input
                type='date'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("starting-date", new Date(event.target.value));
                    trigger("title");
                }}
            />
            {errors['starting-date'] && <p>{errors['starting-date']?.message}</p>}

            <input
                type='date'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("starting-date", new Date(event.target.value));
                    trigger("title");
                }}
            />
            {errors['ending-date'] && <p>{errors['ending-date']?.message}</p>}

            <input
                placeholder='Location'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("location", event.target.value);
                    trigger("location");
                }}
            />
            {errors.location && <p>{errors.location?.message}</p>}

            <input
                placeholder='Participants'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("participants", event.target.value);
                    trigger("participants");
                }}
            />
            {errors.participants && <p>{errors.participants?.message}</p>}
        </div>
    )
}

export default Inputs;