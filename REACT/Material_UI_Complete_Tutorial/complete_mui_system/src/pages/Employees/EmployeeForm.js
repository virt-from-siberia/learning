import React from "react";

import { Grid } from "@material-ui/core";

import { Controls } from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as employeeService from "../../services/employeeService";

const genderItem = [
  {
    id: "male",
    title: "Male",
  },
  {
    id: "female",
    title: "Female",
  },
  {
    id: "other",
    title: "Other ",
  },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export const EmployeeForm = () => {
  const { values, setValues, handleOnChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleOnChange}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            onChange={handleOnChange}
            name="email"
          />
          <Controls.Input
            label="Mobile"
            value={values.mobile}
            onChange={handleOnChange}
            name="mobile"
          />
          <Controls.Input
            label="City"
            value={values.city}
            onChange={handleOnChange}
            name="city"
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleOnChange}
            label="Gender"
            items={genderItem}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleOnChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleOnChange}
          />
          <Controls.CheckBox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleOnChange}
          />
          <div>
            <Controls.Button text="Submit" type="submit" />
            <Controls.Button text="Reset" color="secondary" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};
