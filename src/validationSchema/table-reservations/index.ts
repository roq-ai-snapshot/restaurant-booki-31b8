import * as yup from 'yup';

export const tableReservationValidationSchema = yup.object().shape({
  table_number: yup.number().integer().required(),
  reservation_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
