import { register } from "features/Auth/userSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import RegisterForm from "../RegisterForm";

Register.prototype = {};

function Register(props) {
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
      console.log("fail", error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
