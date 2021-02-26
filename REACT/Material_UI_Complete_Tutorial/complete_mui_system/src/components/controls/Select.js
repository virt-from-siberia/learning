import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select as MuiSelect,
} from "@material-ui/core";

export const Select = (props) => {
  const { name, label, value, error = null, onChange, options } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>

      <MuiSelect name={name} value={value} onChange={onChange} label={label}>
        <MenuItem value="">none</MenuItem>

        {options.map((item) => (
          <MenuItem key={item} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
