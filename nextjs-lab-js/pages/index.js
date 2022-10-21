import { useState } from "react";
import Pessoa from "../components/Pessoa";

export default function Home() {
  const [idadee, setIdade] = useState(25);

  const incrementaIdade = () => {
    setIdade((idadee) => ++idadee);
  };
  return (
    <div>
      <h1>Home</h1>
      <Pessoa nome="Luis Carlos" idade={idadee} />
      <button onClick={incrementaIdade}>Incrementa idade</button>
    </div>
  );
}
