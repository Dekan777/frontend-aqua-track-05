import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { NavLink, useNavigate } from 'react-router-dom';

import css from './SignUpForm.module.css';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { useId,  } from 'react';

import Logo from '../../../shared/components/Logo/Logo';
import { register } from '../../../redux/auth/operations';
import { ShareIconPassword } from '../../../shared/components/ShareIconPassword/ShareIconPassword';

const CheckSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Required email'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(50, 'Too long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\\$%\\^&\\*])(?=.{8,128})/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .required('Required password'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required password'),
});
const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};
export default function SignUpForm() {
  const navigate = useNavigate();
  const idEmail = useId();
  const idPassword = useId();
  const idRepeatPassword = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, _) => {
    const name = values.email.split('@')[0];
    const user = { name, email: values.email, password: values.password };
    dispatch(register(user))
      .unwrap()
      .then(() => {
        toast.success('You have successfully registered!');
        navigate('/signin');
      })
      .catch(error => {
        if (error === 'Email already in use') {
          toast.error(error);
          return;
        }
        toast.error('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={CheckSchema}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor={idEmail} className={css.label}>
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id={idEmail}
                  className={css.input}
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.field}>
                <label htmlFor={idPassword} className={css.label}>
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id={idPassword}
                  className={css.input}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
                <ShareIconPassword name={idPassword} iconId="FirstIconPassword" css={css} />
              </div>
              <div className={css.field3}>
                <label htmlFor={idPassword} className={css.label}>
                  Repeat Password
                </label>
                <Field
                  type="password"
                  name="repeatPassword"
                  id={idRepeatPassword}
                  className={css.input}
                  placeholder="Repeat password"
                />
                <ErrorMessage
                  name="repeatPassword"
                  component="span"
                  className={css.error}
                />
                <ShareIconPassword name={idRepeatPassword} iconId="SecondIconPassword" css={css} /> 
              </div>
              <button type="submit" className={css.button}>
                Sign up
              </button>
            </Form>
          </Formik>
        </div>
        <p className={css.text}>
          Already have account?
          <NavLink to="/signin" className={css.link}>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}
