import React from "react";
import RegisterForm from "../RegisterForm";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(">>> handlesubmit register: ", values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />{" "}
    </div>
  );
};

export default Register;
