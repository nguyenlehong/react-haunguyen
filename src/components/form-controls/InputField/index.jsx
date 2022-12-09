import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Register from "features/Auth/components/Register";
InputField.prototype = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
function InputField(props) {
  const { form, name, label, disabled } = props;
  // const { errors } = form;
  // const hasError = errors[name];
  // console.log(">>> errores name", errors[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          margin="normal"
          fullWidth
          label={label}
          // error={!!hasError}
          // helperText={errors[name]?.message}
          required
        ></TextField>
      )}
    />
  );
}

export default InputField;
