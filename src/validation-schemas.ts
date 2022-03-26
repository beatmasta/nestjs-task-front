import * as yup from 'yup';

export const createEmployeeSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    phone: yup.string().required(),
    city: yup.string().required(),
    zip: yup.string().required(),
    address1: yup.string().required(),
});
