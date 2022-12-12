import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import {
  Avatar,
  Input,
  LinearProgress,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined, OilBarrel } from "@mui/icons-material";
import Button from "@mui/material/Button";
import "./style.scss";
import InputPassword from "components/form-controls/InputPassword";
import { register } from "features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function LoginForm(props) {
  const schema = yup
    .object()
    .shape({
      identifier: yup.string().required("please enter your full name."),
      password: yup.string().required("please enter your full password."),
    })
    .required();
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    console.log(">>> form register: ", values);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };

  return (
    <>
      <LinearProgress />
      <Avatar className="icon">
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className="title">
        <p>Sign in</p>
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" type="email" form={form} />
        <InputPassword name="password" label="Password" form={form} />

        <Button type="submit" fullWidth variant="contained">
          Sign In
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
