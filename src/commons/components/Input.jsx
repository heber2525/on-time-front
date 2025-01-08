export const Input = ({ register, errors, name, onChange, ...props }) => {
  return (
    <div>
      <input {...register[name]} onChange={onChange} {...props} />
      {/* {errors && <p>{errors}</p>} */}
    </div>
  );
};
