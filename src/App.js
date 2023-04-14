//uncontrolled form
import { useRef } from "react";

const Form = (props) => {
  

  // ref to get input values
  const numInput = useRef(null);

  const handleSubmit = (event) => {
    // prevent page refresh
    event.preventDefault();
    let obj = {num: numInput.current.value}
    let userInput = Object.values(obj)
    const credNum = Number(userInput.join(''));
    console.log(credNum)
    ///////
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
    luhnAlgo(credNum)
    ///////////
    
  
    
  };

  // The JSX for the form binding the functions and state to our inputs
  return (
    <form onSubmit={handleSubmit}>
      <input type="num" ref={numInput} placeholder="Enter Credit Card Number Here" />
      <input type="submit" value="Submit Form" />
    </form>
  );
};

export default Form;
