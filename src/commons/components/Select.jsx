export const Select = ({ options, register, name, errors }) => {
  return (
    <div>
      <select>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} {...register[name]}>
              {option.label}
            </option>
          );
        })}
      </select>
      {/* {errors && <p>{errors}</p>} */}
    </div>
  );
};
