import { useState } from "react";

const Buttons = (props) => {
  const [numberState, setValue] = useState(props);

  const changevalue = (sign) => {
    let result = 0;
    switch (sign) {
      case "+":
        result = parseInt(props.num1) + parseInt(props.num2);
        break;
      case "-":
        result = parseInt(props.num1) - parseInt(props.num2);
        break;
      case "*":
        result = parseInt(props.num1) * parseInt(props.num2);
        break;
      case "/":
        result = parseInt(props.num1) / parseInt(props.num2);
        break;
      default:
        result = 0;
    }

    if (isNaN(result)) {
      result = 0;
    }

    setValue({ result: result });
  };

  return (
    <div>
      <div className="btnsDiv">
        <button className="btn" onClick={() => changevalue("+")}>
          +
        </button>
        <button className="btn" onClick={() => changevalue("-")}>
          -
        </button>
        <button className="btn" onClick={() => changevalue("*")}>
          *
        </button>
        <button className="btn" onClick={() => changevalue("/")}>
          /
        </button>
      </div>
      <p> Result :: {numberState.result}</p>
    </div>
  );
};

export default Buttons;
