import { login } from "features/Auth/userSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import RegisterForm from "../RegisterForm";
import { useSnackbar } from "notistack";
import LoginForm from "../LoginForm";

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      // close dialog in header
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      console.log("new user", user);
      console.log(">>> form:", values);
    } catch (error) {
      console.log("fail to login", error);

      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
