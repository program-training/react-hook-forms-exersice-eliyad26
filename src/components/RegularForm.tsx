import { useState, ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";
import "./RegularForm.css";
interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { userName: "", email: "", password: "" } });
  const onSubmit = (data: string) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <label>UserName : </label>
      <input
        {...register("userName", {
          required: true,
          minLength: { value: 2, message: "jjjj" },
        })}
        aria-invalid={errors.userName ? "true" : "false"}
      />
      {errors.userName?.type === "required" && (
        <p role="alert">userName is required</p>
      )}
      {errors.userName?.type === "minLength" && (
        <p role="alert">needs more then one letter</p>
      )}
      <br />

      <label>Email : </label>
      <input
        {...register("email", {
          required: "this is required field",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "needs to be else",
          },
        })}
      />
      {errors.email?.message}
      <br />

      <label>Password : </label>
      <input
        {...register("password", {
          required: "this is required field",
          pattern: {
            value:
              /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!]).{8,20}$/i,
            message: "not good password",
          },
        })}
      />
      {errors.password?.message}
      <br />

      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default RegularForm;
