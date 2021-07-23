import React from "react";
import { useDispatch } from "react-redux";
import { Field, FieldArray, reduxForm } from "redux-form";
import { createSession } from "../../actions/sessionActions";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { IoSend } from "react-icons/io5"

const ReduxForm = (props) => {
  const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(createSession(formValues));
  };

  const renderField = ({ input, label, type, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <div className="input">
          <input {...input} type={type} />
        </div>
        <div className="errorMessage">{meta.error}</div>
      </div>
    );
  };

  const renderCardios = ({ fields, meta }) => (
    <ul className="fieldArray">
      <li>
        <button className="addCardioButton" type="button" onClick={() => fields.push({})}>
          Ajouter cardio <MdAddCircle />
        </button>
        {meta.submitFailed && meta.error && <span>{meta.error}</span>}
      </li>
      {fields.map((cardio, index) => (
        <li key={index} className="cardioActivity">
          <div className="activityHeader">
            <h4>Cardio #{index + 1}</h4>
            <button
              className="removeButton"
              type="button"
              title="Remove Cardio"
              onClick={() => fields.remove(index)}
            >
              <MdRemoveCircle />
            </button>
          </div>
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
    <ul className="fieldArray">
      <li>
        <button className="addStrengthButton" type="button" onClick={() => fields.push({})}>
          Ajouter exercice <MdAddCircle />
        </button>
        {meta.submitFailed && meta.error && <span>{meta.error}</span>}
      </li>
      {fields.map((strength, index) => (
        <li key={index} className="strengthActivity">
          <div className="activityHeader">
            <h4>Fitness #{index + 1}</h4>
            <button
              className="removeButton"
              type="button"
              title="Remove Strength"
              onClick={() => fields.remove(index)}
            >
              <MdRemoveCircle />
            </button>
          </div>
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
    <ul className="fieldArray">
      <li>
        <button className="addSerieButton" type="button" onClick={() => fields.push({})}>
          Ajouter série +
        </button>
        {meta.submitFailed && meta.error && <span>{meta.error}</span>}
      </li>
      {fields.map((serie, index) => (
        <li key={index} className="strengthActivity">
          <div className="activityHeader">
            <h4>Serie #{index + 1}</h4>
            <button
              className="removeButton"
              type="button"
              title="Remove Serie"
              onClick={() => fields.remove(index)}
            >
              -
            </button>
          </div>
          <div className="fields">
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
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="form">
      <div className="formTitle">Nouvelle séance</div>
      <Field name="date" component={renderField} label="Date" type="text" />
      <Field
        name="duration"
        component={renderField}
        label="Duration"
        type="number"
      />
      <div className="fieldArrays">
        <FieldArray name="cardios" component={renderCardios} />
        <FieldArray name="strengths" component={renderStrengths} />
      </div>
      <div className="bottomButtons">
        <button className="submitButton" type="submit" disabled={props.submitting}>Valider <IoSend /></button>
        <button className="clearButton" type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
            Effacer
          </button>
      </div>
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
