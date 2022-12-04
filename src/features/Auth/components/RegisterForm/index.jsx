import React from "react";
// import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { Avatar, TextField, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";

import "./style.scss";
function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required(),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
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
        {/* <InputField name="title" lable="todo" form={form} /> */}{" "}
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="fullName"
          autoFocus
          form={form}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
          form={form}
        />{" "}
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          type="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
          form={form}
        />{" "}
        <TextField
          margin="normal"
          required
          fullWidth
          id="retypepassword"
          type="password"
          label="Retype Password"
          name="retypePassword"
          autoComplete="password"
          autoFocus
          form={form}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
    </>
  );
}

export default RegisterForm;
