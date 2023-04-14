import { useState } from "react";
import "./App.css";

function App() {
  //let cardNumber = '4408041234567893'
  const [credNum, setCredNum] = useState("");

  const luhnAlgo = (credNum) => {
    let credNumArr = Array.from(String(credNum), Number);
    let arr = [];

    for (let i = 15; i >= 0; i -= 1) {
      if (i % 2 === 0) {
        arr.push(credNumArr[i] * 2);
      } else {
        arr.push(credNumArr[i]);
      }
    }

    let revArr = arr.reverse();
    let strArr = revArr.toString().split("");
    let toSumArr = strArr.filter(removeComma);

    function removeComma(elem) {
      if (elem !== ",") {
        return elem;
      }
    }
    let nums = Array.from(toSumArr, Number);

    let sum = nums.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    if (sum % 10 === 0) {
      console.log("Card number is valid.");
      return true;
    } else {
      console.log("Card number is invalid");
      return "Card number is invalid";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const num = event.target.credNum.value;
    setCredNum(`Test`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input type="text" value="credNum" />

      <br />
      <br />

      <button type="submit">Submit</button>

      <br />
      <br />

      <h1>{credNum}</h1>
    </form>
  );
}

export default App;
