import React from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import fr from 'date-fns/locale/fr';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('fr', fr)

export const FieldDatePicker = ({ input, placeholder, label, meta }) => (
  <div className="field">
    <label>{label}</label>
    <DatePicker
        className="input"
        locale="fr"
        utcOffset={0}
        dateFormat="dd/MM/yyyy"
        selected={input.value || null}
        onChange={input.onChange}
        disabledKeyboardNavigation
        placeholderText={placeholder}
    />
    {meta.touched &&
      ((meta.error && <div className="errorMessage">{meta.error}</div>) ||
        (meta.warning && <div className="errorMessage">{meta.warning}</div>))}
  </div>
);