import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
