import { useState } from "react";
import Pessoa from "../components/Pessoa";
import comAutorizacao from "../hoc/comAutorizacao";

function Home() {
  const [idadee, setIdade] = useState(25);
  const pessoas = [
    { nome: "Luis", idade: "18" },
    { nome: "Maria", idade: "28" },
    { nome: "João", idade: "30" },
    { nome: "Mario", idade: "60" },
  ];

  const incrementaIdade = () => {
    setIdade((idadee) => ++idadee);
  };
  return (
    <div>
      <h1>Home</h1>
      <Pessoa nome="Luis Carlos" idade={idadee} />
      <button onClick={incrementaIdade}>Incrementa idade</button>

      {pessoas.map(({ idade, nome }) => {
        return <Pessoa key={nome} nome={nome} idade={idade} />;
      })}
    </div>
  );
}

export default comAutorizacao(Home);
