import { Button } from "../commons/components/Button";
import { Input } from "../commons/components/Input";
import { useForm } from "react-hook-form";
import authServices from "../services/authService";
import { Select } from "../commons/components/Select";

export const Register = () => {
  // const submit = () => {
  //   console.log("hola");
  // };
  const roles = [
    { label: "Administrador", value: "administrador" },
    { label: "Empleado", value: "empleado" },
  ];
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const onSubmit = async (e) => {
    e.preventDefault();
    await authServices.register({ nombre: "", apellido: "", correo: "", rol: "", empresa: "" });
  };
  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="nombre" name="nombre" register={register} errors={errors} />
        <Input type="text" placeholder="dni" name="dni" register={register} errors={errors} />
        <Input type="email" placeholder="correo" name="correo" register={register} errors={errors} />
        <Input type="email" placeholder="password" name="password" register={register} errors={errors} />
        <Select options={roles} name="roles" register={register} errors={errors} />
        <Input type="text" placeholder="empresa" name="empresa" register={register} errors={errors} />
        <Button nameButton="Registrarse" />
      </form>
    </div>
  );
};
