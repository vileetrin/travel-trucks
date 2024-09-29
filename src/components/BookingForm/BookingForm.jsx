import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRef, useState, useEffect } from 'react';
import css from './BookingForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name should be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  date: Yup.date().required('Date is required').nullable(),
  comment: Yup.string().max(200, "Comment can't exceed 200 characters"),
});

export default function BookingForm() {
  const today = new Date().toISOString().split('T')[0];
  return (
    <div className={css.container}>
      <div>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="name"
            placeholder="Name*"
            className={css.input}
          ></Field>
          <ErrorMessage name="name" component="span" className={css.error} />
          <Field
            type="email"
            name="email"
            placeholder="Email*"
            className={css.input}
          ></Field>
          <ErrorMessage name="email" component="span" className={css.error} />
          <Field
            type="date"
            name="date"
            className={css.input}
            min={today}
            placeholder="Booking date*"
          />
          <ErrorMessage name="date" component="span" className={css.error} />
          <Field
            as="textarea"
            name="comment"
            placeholder="Comment"
            className={css.textarea}
            rows="4"
          />
          <ErrorMessage name="comment" component="span" className={css.error} />
        </Form>
      </Formik>
      <button type="submit" className={css.btn}>
        Send
      </button>
    </div>
  );
}
