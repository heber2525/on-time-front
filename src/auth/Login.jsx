import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../commons/components/Input";
import { Button } from "../commons/components/Button";
import authServices from "../services/authService";

export const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
    setValue,
    reset,
  } = useForm();
  const onSubmit = async (form) => {
    try {
      await authServices.login(form);
      console.log("Login exitoso");
      reset({ correo: "", password: "" }); // Restablecer los valores del formulario
    } catch (error) {
      console.error("Error durante el login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="correo"
          name="correo"
          register={register}
          errors={errors}
          onChange={(e) => {
            console.log(e.target.value);

            setValue("correo", e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          register={register}
          errors={errors}
          onChange={(e) => {
            setValue("password", e.target.value);
          }}
          onFocus={() => {
            console.log("focus");
          }}
        />
        <Button nameButton="Login" />
      </form>
    </div>
  );
};
