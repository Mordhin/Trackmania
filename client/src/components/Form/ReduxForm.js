import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createSession } from "../../actions/sessionActions";

const ReduxForm = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    dispatch(createSession(formValues));
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="date" component={renderInput} label="Date" />
      <Field name="duration" component={renderInput} label="Duration" />
      <button>Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.date) {
    errors.date = "You must enter a date";
  }
  if (!formValues.duration) {
    errors.duration = "You must enter a duration";
  }
  return errors;
};

export default reduxForm({
  form: "sessionForm",
  validate,
})(ReduxForm);
