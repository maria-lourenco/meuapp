import Cabecalho from "./cabeçalho/cabeçalho"
import "./MinhaConta.css"
function MinhaConta() {
    return (
        <div>
            <Cabecalho />

            <div class="card">
                <h5 class="card-header">Informações pessoais</h5>
               <div class="card-body">
               <img className="imagenDoCliente" src="https://play-lh.googleusercontent.com/VCTiwwUfLPRh-8vrDraHfgVZOYaO8ArCVXkAKF8uv61Q7jTTVW2ox3jNjEEpgylzHsA" style={{width:90}}/>
                    <div className="dadosPessoais">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default MinhaConta