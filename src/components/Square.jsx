const Square = ({ value, children }) => {
  console.log(children);
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};
export default Square;
