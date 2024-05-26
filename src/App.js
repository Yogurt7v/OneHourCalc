import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(display);
  const [operator, setOperator] = useState("");

  const addOperator = (e) => {
    setOperator(e.target.id);
    setFirstNumber(Number(display));
    setDisplay(`${e.target.id}`);
  };

  const addNumber = (e) => {
    if (display === 0) {
      setDisplay(e.target.id);
    } else {
      setDisplay(display + e.target.id);
    }
    if (e.target.id === "point") {
      setDisplay("0.");
    }
    if (operator === "") {
      setFirstNumber(Number(display + e.target.id));
    }

    if (operator !== "") {
      setDisplay(display + e.target.id);
      let a = (display + e.target.id).slice(1);
      setSecondNumber(Number(a));
    }
  };

  const clearDisplay = () => {
    setDisplay(0);
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator("");
  };

  const result = () => {
    switch (operator) {
      case "+":
        setDisplay(firstNumber + secondNumber);
        break;
      case "-":
        setDisplay(firstNumber - secondNumber);
        break;
      case "*":
        setDisplay(firstNumber * secondNumber);
        break;
      case "/":
        let result = firstNumber / secondNumber;
        if (Number.isInteger(result)) {
          setDisplay(result);
        }
        if (!Number.isInteger(result)) {
          setDisplay(result.toFixed(10));
        }
        break;
      default:
        break;
    }
  };


  return (
    <>
      <div className="AppWrapper">
        <div className="App">
          <header className="App-header">
            <h1>Calculator</h1>
          </header>
        </div>
            <div className="display">{display ? display : 0}</div>
        <div className="numbersWrapper">
          <ul>
            <div onClick={(e) => addNumber(e)} className="numbers">
              <li id="1">1</li>
              <li id="2">2</li>
              <li id="3">3</li>
              <li id="4">4</li>
              <li id="5">5</li>
              <li id="6">6</li>
              <li id="7">7</li>
              <li id="8">8</li>
              <li id="9">9</li>
              <li id="0">0</li>
              <li id="point">.</li>
              <li className="none"></li>
            </div>
            <div onClick={(e) => addOperator(e)} className="operators">
              <li id="+">+</li>
              <li id="-">-</li>
              <li id="/">/</li>
              <li id="*">*</li>
            </div>
            <div className="equal">
              <li id="C" onClick={() => clearDisplay(0)}>
                C
              </li>
              <li id="=" onClick={() => result()}>
                =
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
