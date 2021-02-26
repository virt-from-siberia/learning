import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const DatePicker = (props) => {
  const { name, label, onChange, value } = props;

  const convertToDefaultEventParam = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="dd/mm/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefaultEventParam(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};
