import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import {
  Avatar,
  Input,
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

function RegisterForm(props) {
  const schema = yup
    .object()
    .shape({
      fullName: yup.string().required("please enter your full name."),
      // email: yup.string().required("please enter your email.").min(3, "3 key"),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log("new user", user);
      console.log(user);
    } catch (error) {
      console.log("loi that roi huhuhh", error);
    }
    console.log(">>> todo form :", values);
  };
  return (
    <>
      <Avatar className="icon">
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className="title">
        <p>Create an account</p>
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="full name" form={form} />
        <InputField name="email" label="Email" type="email" form={form} />
        <InputPassword name="password" label="Password" form={form} />
        <InputPassword
          name="retypePassword"
          label="Retype Password"
          form={form}
        />
        <Button type="submit" fullWidth variant="contained">
          Sign In
        </Button>
      </form>
    </>
  );
}

export default RegisterForm;
