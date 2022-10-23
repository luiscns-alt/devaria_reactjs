export default function Pessoa({idade, nome}) {
    return (
        <div className="pessoa">
            <b>Nome</b>: {nome} <br/>
            <b>Idade</b>: {idade} <br/>
            {idade >= 18 ? (
                <span>Maior de Iade</span>
            ) : (
                <span>Menor de Idade</span>)
            }
        </div>
    );
}
