import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";

export const Select = (props) => {
  const { name, label, value, onChange, options } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>

      <MuiSelect name={name} value={value} onChange={onChange} label={label}>
        <MenuItem value="">none</MenuItem>

        {options.map((item) => (
          <MenuItem key={item} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};
