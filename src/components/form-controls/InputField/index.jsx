import { TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, lable, disabled } = props;
  const { errors, formState } = form;
  // const hasError = formState.touched[name] && errors[name];
  // console.log(">>> erros, formState", errors[name], formState[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      lable={lable}
      disabled={disabled}
      render={() => <TextField helperText="loi roi " />}
    />
  );
}

export default InputField;

// render={() => <TextField />}
// error={!!hasError}
