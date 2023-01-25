import "./CelciusInput.css";

const CelciusInput = (props) => {
  const changeHandler = (event) => {
    props.setCelcius(Number(event.target.value));
  };

  return (
    <input
      type="number"
      defaultValue={props.celcius}
      onChange={changeHandler}
    />
  );
};

export default CelciusInput;
