import React, { useState } from "react";
import validationSchema from './validationSchema';
import s from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { hideAlert, login, setEmail, setPassword } from "../../Redux/actions";
import { Link } from 'react-router-dom';
import { Alert } from "@material-ui/lab";

function Login() {
  const dispatch = useDispatch();

  const email = useSelector(state => state.form.email);
  const password = useSelector(state => state.form.password);
  const error = useSelector(state => state.login.error);

  const INITIAL_VALUES = {
    email: email,
    password: password,
  };

  return (
    <div className={s.auth}>
      <h2 className={s.formTitle}>Member Login</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values, { resetForm }) => {
          resetForm((values = ''));
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, touched, errors, dirty }) => (
          <Form className={s.formWrapper}>
            <Field
              className={`${s.formItem} ${s.email}`}
              name="email"
              placeholder="&#x2709; E-Mail"
              type="email"
              onBlur={handleBlur}
              onChange={e => {
                handleChange(e);
                dispatch(setEmail(e.target.value));
              }}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className={s.errors}>{errors.email}</div>
            )}
            <Field
              className={`${s.formItem} ${s.password}`}
              name="password"
              placeholder="&#61475; Password"
              type="password"
              onBlur={handleBlur}
              onChange={e => {
                handleChange(e);
                dispatch(setPassword(e.target.value));
              }}
              value={values.password}
            />
            {touched.password && errors.password && (
              <div className={s.errors}>{errors.password}</div>
            )}
            {error && <Alert onClose={() => dispatch(hideAlert())} className={s.error} severity='error'>{error}</Alert>}
            <button
              className={s.btn}
              type="submit"
              disabled={!dirty}
              onClick={() => {
                dispatch(login({email, password}))
                dispatch(setEmail(''));
                dispatch(setPassword(''));
                dispatch(hideAlert())
              }}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <Link className={s.someText}>
        <span style={{ color: 'gray' }}>Forgot</span> Username / Password?
      </Link>
      <Link className={s.someText}>Create Account</Link>
    </div>
  );
}

export default Login;
