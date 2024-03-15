import * as yup from 'yup';

export const schema = yup.object().shape({
    title: yup
        .string()
        .required('Please provide a title'),
    description: yup
        .string()
        .required('Please provide a description'),
    'starting-date': yup
        .date()
        .required('Please provide a starting date')
        .max('2024/12/31', 'Holiday must start before 31/12/2024'),
    'ending-date': yup
        .date()
        .required('Please provide a ending date')
        .max('2024/12/31', 'Holiday must end before 31/12/2024')
    ,
    location: yup
        .string()
        .required('Please provide a location'),
    participants: yup.string(),
});