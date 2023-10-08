import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  capacity: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
