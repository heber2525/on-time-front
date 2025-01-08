export const Button = ({ nameButton, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{nameButton}</button>
    </div>
  );
};
