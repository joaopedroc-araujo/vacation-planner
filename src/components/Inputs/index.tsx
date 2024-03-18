import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import './styles.css';
import { useDateContext } from '../../contexts/DateContext/DateContext';

const Inputs: React.FC = () => {
    const { addEventDetails, eventDetails } = useDateContext();

    const {
        register,
        trigger,
        setValue,
        getValues,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        for (const fieldName in schema.fields) {
            register(fieldName as keyof typeof schema.fields);
        }
    }, [register]);


    const onSubmit = () => {
        const values = getValues();
        addEventDetails(values);
    };

    const handleInputChange = () => {
        const values = getValues();
        addEventDetails(values);
    };

    console.log(eventDetails)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='modal-inputs'>
                <div className='mb-1'>
                    <input
                        className={`inputs ${errors.title ? 'border-error' : ''}`}
                        placeholder='Title'
                        onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                            setValue("title", event.target.value);
                            trigger("title");
                        }}
                        onBlur={handleInputChange}
                    />
                    {errors.title && <p style={{ color: 'red', fontSize: '12px', marginTop: 0 }}>{errors.title?.message}</p>}
                </div>
                <div className='mb-1'>
                    <textarea
                        className={`inputs ${errors.description ? 'border-error' : ''}`}
                        placeholder='Description'
                        rows={3}
                        onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setValue("description", event.target.value);
                            trigger("description");
                            handleInputChange();
                        }}
                        onBlur={handleInputChange}
                    />
                    {errors.description && <p style={{ color: 'red', fontSize: '12px', marginTop: 0 }}>{errors.description?.message}</p>}
                </div>
                <div className='mb-1'>
                    <input
                        className={`inputs ${errors.location ? 'border-error' : ''}`}
                        placeholder='Location'
                        onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                            setValue("location", event.target.value);
                            trigger("location");
                            handleInputChange();
                        }}
                        onBlur={handleInputChange}
                    />
                    {errors.location && <p style={{ color: 'red', fontSize: '12px', marginTop: 0 }}>{errors.location?.message}</p>}
                </div>
                <div className='mb-1'>
                    <input
                        className={`inputs ${errors.participants ? 'border-error' : ''}`}
                        placeholder='Participants'
                        onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                            setValue("participants", event.target.value);
                            trigger("participants");
                            handleInputChange();
                        }}
                        onBlur={handleInputChange}
                    />
                    {errors.participants && <p style={{ color: 'red', fontSize: '12px', marginTop: 0 }}>{errors.participants?.message}</p>}
                </div>
            </div>
        </form>
    )
}

export default Inputs;