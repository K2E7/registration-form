// src/components/RegistrationForm.tsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './RegistrationForm.css';

interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: RegistrationFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const RegistrationForm: React.FC = () => {
  const onSubmit = (values: RegistrationFormValues, { setSubmitting, resetForm }: any) => {
    axios
      .post('/api/users/register', values)
      .then((response) => {
        alert(response.data.message || 'User registered successfully');
        resetForm();
      })
      .catch(() => {
        alert('Registration failed. Please try again.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  className="form-control"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="form-control"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
