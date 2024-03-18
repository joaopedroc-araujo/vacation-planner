import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .required('Please provide a title'),
    description: yup
        .string()
        .required('Please provide a description'),
    location: yup
        .string()
        .required('Please provide a location'),
    participants: yup.string(),
});