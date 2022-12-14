import { register } from "features/Auth/userSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import RegisterForm from "../RegisterForm";
import { useSnackbar } from "notistack";

Register.prototype = {};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      // close dialog in header
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      console.log("new user", user);
      console.log(">>> form:", values);
      enqueueSnackbar(" thanh cong", { variant: "success" });
    } catch (error) {
      console.log("fail", error);

      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
