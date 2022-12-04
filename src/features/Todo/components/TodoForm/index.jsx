import React from "react";
// import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required(),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log(">>> todo form :", values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      TodoForm
      <InputField name="title" lable="todo" form={form} />
    </form>
  );
}

export default TodoForm;
