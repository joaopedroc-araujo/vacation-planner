import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';

const Inputs: React.FC = () => {
    const {
        register,
        trigger,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        for (const fieldName in schema.fields) {
            register(fieldName as keyof typeof schema.fields);
        }
    }, [register]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: 15 }}>
            <input
                style={{ marginBottom: '5px', borderColor: errors.title ? 'red' : '', borderRadius: '5px' }}
                placeholder='Title'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("title", event.target.value);
                    trigger("title");
                }}
            />
            {errors.title && <p style={{ color: 'red', fontSize: '12px', marginTop: '0px' }}>{errors.title?.message}</p>}

            <textarea
                style={{ marginBottom: '5px', borderColor: errors.description ? 'red' : '', borderRadius: '5px' }}
                placeholder='Description'
                rows={3}
                onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setValue("description", event.target.value);
                    trigger("description");
                }}
            />
            {errors.description && <p style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{errors.description?.message}</p>}

            <input
                style={{ marginBottom: '5px', borderColor: errors.location ? 'red' : '', borderRadius: '5px' }}
                placeholder='Location'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("location", event.target.value);
                    trigger("location");
                }}
            />
            {errors.location && <p style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{errors.location?.message}</p>}

            <input
                style={{ marginBottom: '5px', borderColor: errors.participants ? 'red' : '', borderRadius: '5px' }}
                placeholder='Participants'
                onChange={(event: React.FocusEvent<HTMLInputElement>) => {
                    setValue("participants", event.target.value);
                    trigger("participants");
                }}
            />
            {errors.participants && <p style={{ color: 'red', fontSize: '12px', marginTop: '2px' }}>{errors.participants?.message}</p>}
        </div>
    )
}

export default Inputs;