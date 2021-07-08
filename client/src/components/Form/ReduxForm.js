import React from "react";
import { useDispatch } from "react-redux";
import { Field, FieldArray, reduxForm } from "redux-form";
import { createSession } from "../../actions/sessionActions";

const ReduxForm = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(createSession(formValues));
  };

  const renderField = ({ input, label, type, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} type={type} />
        <div>{meta.error}</div>
      </div>
    );
  };

  const renderCardios = ({ fields, meta }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Cardios
        </button>
        {meta.submitFailed && meta.error && <span>{meta.error}</span>}
      </li>
      {fields.map((cardio, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Cardio"
            onClick={() => fields.remove(index)}
          >
            Remove Cardio
          </button>
          <h4>Cardio #{index + 1}</h4>
          <Field
            name={`${cardio}.activity`}
            type="text"
            component={renderField}
            label="Activity"
          />
          <Field
            name={`${cardio}.distance`}
            type="number"
            component={renderField}
            label="Distance"
          />
          <Field
            name={`${cardio}.duration`}
            type="number"
            component={renderField}
            label="Duration"
          />
        </li>
      ))}
    </ul>
  );

  const renderStrengths = ({ fields, meta }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Strengths activity
        </button>
        {meta.submitFailed && meta.error && <span>{meta.error}</span>}
      </li>
      {fields.map((strength, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Strength"
            onClick={() => fields.remove(index)}
          >
            Remove Strength
          </button>
          <h4>Strength #{index + 1}</h4>
          <Field
            name={`${strength}.activity`}
            type="text"
            component={renderField}
            label="Activity"
          />
          <Field
            name={`${strength}.duration`}
            type="number"
            component={renderField}
            label="Duration"
          />
          <FieldArray name={`${strength}.series`} component={renderSeries} />
        </li>
      ))}
    </ul>
  );

  const renderSeries = ({ fields, meta }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Series
        </button>
        {meta.submitFailed && meta.error && <span>{meta.error}</span>}
      </li>
      {fields.map((serie, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Serie"
            onClick={() => fields.remove(index)}
          >
            Remove Serie
          </button>
          <h4>Serie #{index + 1}</h4>
          <Field
            name={`${serie}.weight`}
            type="number"
            component={renderField}
            label="Weight"
          />
          <Field
            name={`${serie}.repetition`}
            type="number"
            component={renderField}
            label="Repetition"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="date" component={renderField} label="Date" type="text" />
      <Field
        name="duration"
        component={renderField}
        label="Duration"
        type="number"
      />
      <FieldArray name="cardios" component={renderCardios} />
      <FieldArray name="strengths" component={renderStrengths} />
      <button type="submit">Submit</button>
    </form>
  );
};

// to be put into a new validate.js file
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
