import "./cabeçalho.css"

function Cabecalho(){
    return(
        <div className="cabecalho">
            <button className="btn btn-outline-secondary"><i class="material-icons">menu</i></button>
            <h1 className="titulo">Conta</h1>
            <p>Conta pessoal</p>
            <hr/>
        </div>
    )
}

export default Cabecalho