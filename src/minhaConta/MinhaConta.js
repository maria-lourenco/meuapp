import Cabecalho from "./cabeçalho/cabeçalho"
import "./MinhaConta.css"
function MinhaConta() {
    return (
        <div>
            <Cabecalho />
            <div class="container-fluid" >
                <div className="md-3 row">
                    <div className=" col-sm-12 col-md-5">
                        <div class="card">
                            <h5 class="card-header">Configurações de privacidade</h5>
                            <div class="card-body">
                                <img className="imagenDoCliente" src="https://play-lh.googleusercontent.com/VCTiwwUfLPRh-8vrDraHfgVZOYaO8ArCVXkAKF8uv61Q7jTTVW2ox3jNjEEpgylzHsA" style={{ width: 90 }} />
                                <div className="dadosPessoais">
                                    <h5 class="card-title">Lucas alves dos santos</h5>
                                    <p class="card-text"><span>&#9742;</span>+ 55 31 99585-2587 <br /> <span>&#9993;</span> 134lucasalves@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div />
                    <div className="mb-3 row" />
                    <div className=" col-sm-12 col-md-5 ">
                        <div class="card">
                            <h5 class="card-header">Notificações</h5>
                            <div class="card-body">
                                <div className="dadosPessoais">
                                    <form action="" method="POST">
                                        <div class="row">
                                            <div class="col-sm-10">
                                                <input type="checkbox" />
                                                <label for="staticEmail">Receba newsletters</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-10">
                                                <input type="checkbox" />
                                                <label for="staticEmail">Receba e-mails marketing com ofertas especiais</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-10">
                                                <input type="checkbox" />
                                                <label for="staticEmail">Receba e-mail sobre atualizaçoes do sistema</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-10">
                                                <input type="checkbox" />
                                                <label for="staticEmail">Mostrar Notificações push sobre noticias</label>
                                            </div>
                                        </div>
                                        <div className="mt-3 row">
                                            <div className="col-sm-10">
                                                <button className="btn btn-primary">Salvar</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-3 row">
                    <div className="col-sm-12 col-md-5">
                        <div className="card">
                            <h5 className="card-header">Gestão de dados pessoais</h5>
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary">carregar meus dados</button>
                                    <textarea></textarea>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>

    )
}
export default MinhaConta