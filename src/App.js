import Form from "./Components/Form";
import { useState } from "react";
const App = () => {
  //saved in local storage
  const [valid, setValid] = useState("test");
  //function updates valid state variable
  const validator = (prop) => {
    let credNumArr = Array.from(String(prop), Number);
    let arr = [];

    for (let i = credNumArr.length - 1; i >= 0; i -= 1) {
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
    console.log(sum);
    if (sum % 10 === 0) {
      console.log("Card number is valid.");
      setValid("Valid");
    } else {
      console.log("Card number is invalid");
      setValid("Invalid");
    }
  };

  return (
    <div>
      <h1>Validation Form</h1>
      <Form validateCard={validator}></Form>
      <h2>{valid}</h2>
    </div>
  );
};

export default App;
