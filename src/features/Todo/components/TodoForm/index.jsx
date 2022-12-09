import React from "react";
// import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { Button } from "@mui/material";
import PasswordField from "components/form-controls/PasswordField";

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: "",
      age: "",
    },
  });
  const handleSubmit = (values) => {
    console.log(">>> todo form :", values);
  };
  const { regiser } = useForm();
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" lable="title" form={form} />
      {/* <InputField name="age" lable="age" form={form} /> */}
      <PasswordField name="age" lable="ajkdhfaklsjd" form={form} />
      <Button type="submit"> Submit</Button>
    </form>
  );
}

export default TodoForm;
