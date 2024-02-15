import * as yup from "yup";

const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email format")
    .required("Required field"),
  age: yup
    .number()
    .min(18, "Age must be greater than or equal to 18")
    .max(100, "Age must be less than 100")
    .required('Required field'),

  password: yup.string().min(5, 'Password must be at least 5 characters').matches(regex,'Your password is not strong')
  .required('Required field'),

  passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Confirm password is not right').required('Required field')
});
