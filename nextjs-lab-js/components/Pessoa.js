export default function Pessoa({ idade, nome }) {
  return (
    <div className="pessoa">
      <b>Nome</b>: {nome}
      <b>Idade</b>: {idade}
    </div>
  );
}
