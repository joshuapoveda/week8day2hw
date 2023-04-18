import { useState } from "react";

export default function Form(props) {
  const [credNmum, setCredNum] = useState("");

  const updateData = (e) => {
    setCredNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.validateCard(credNmum);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={updateData} />
        <button>CLICK</button>
      </form>
    </div>
  );
}
