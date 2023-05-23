import React from 'react'
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.userName) {
    errors.userName = 'Required';
  } else if (!/^[A-z\s]+$/.test(values.userName)) {
    errors.userName = 'Only latin letters';
  }

  if (!values.userTel) {
    errors.userTel = 'Required';
  }  else if (!/^[0-9]{12}$/.test(values.userTel)) {
    errors.userTel = 'Must be 12 characters and only numbers';
  }

  if (!values.userEmail) {
    errors.userEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
    errors.userEmail = 'Invalid email address';
  }

  return errors;
};

const MyFormik = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      userTel: '',
      userEmail: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
      />
      {formik.errors.userName ? <div className='error-message'>{formik.errors.userName}</div> : null}

      <label htmlFor="userTel">Phone Number</label>
      <input
        id="userTel"
        name="userTel"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userTel}
      />
      {formik.errors.userTel ? <div className='error-message'>{formik.errors.userTel}</div> : null}

      <label htmlFor="userEmail">Email Address</label>
      <input
        id="userEmail"
        name="userEmail"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userEmail}
      />
      {formik.errors.userEmail ? <div className='error-message'>{formik.errors.userEmail}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormik;