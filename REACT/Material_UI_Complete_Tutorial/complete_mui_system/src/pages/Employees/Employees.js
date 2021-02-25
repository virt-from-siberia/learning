import React from "react";

import { makeStyles } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

import { EmployeeForm } from "./EmployeeForm";
import { PageHeader } from "../../components/PageHeader";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export const Employees = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employer"
        subTitle="Form desing with validation"
        icon={<PeopleIcon fontsize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};
