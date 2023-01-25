import "./ConvertedResult.css";

const ConvertedResult = (props) => {
  const kelvin = props.celcius + 273;
  const fahrenheit = props.celcius * 1.8 + 32;

  return (
    <div className="results">
      <h2>{kelvin} Kelvin</h2>
      <h2>{fahrenheit} Fahrenheit</h2>
    </div>
  );
};

export default ConvertedResult;
