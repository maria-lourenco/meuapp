import './MenuLateral.css'


function MenuLateral() {

    return (

        <div className="menu">

            <div className='menuvazio'></div>

            <div className='menuDados'>
                <img className='imgLogo' src='https://play-lh.googleusercontent.com/VCTiwwUfLPRh-8vrDraHfgVZOYaO8ArCVXkAKF8uv61Q7jTTVW2ox3jNjEEpgylzHsA' />

                <div class="menu-item">
                    <button class="menu-btn">Equipe</button>
                    <div class="submenu">
                        <a href=''>Funcionário 1</a>
                    </div>

                </div>

                <div class="menu-item">
                    <button class="menu-btn">Clientes</button>
                    <div class="submenu">
                        <a href='/cliente/clientes'>Clientes</a>
                        <a href='/cliente/categoriaClientes'>Categoria de Clientes</a>
                        <a href='/cliente/programaFidelidade'>Programa de Fidelidade</a>
                    </div>
                </div>
                <div class="menu-item">
                    <button class="menu-btn">Visão Geral</button>
                    <div class="submenu">
                        <a href='/visaoGeral/resumo'>Resumo</a>
                        <a href='/visaoGeral/agendamento'>Agendamento</a>
                        <a href='/visaoGeral/eventos'>Eventos</a>
                        <a href='/visaoGeral/avaliacoes'>Avaliações</a>
                        <a href='/visaoGeral/menssagens'>Mensagens</a>
                        <a href='/visaoGeral/ligacoes'>Ligações</a>
                        <a href='/visaoGeral/operacoesDeDados'>Operações de Dados</a>
                        <a href='/visaoGeral/registroDeAlteraçoes'>Registro de Alterações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Análise</button>
                    <div class="submenu">
                        <a href='/analise/estatistica'>Estatísticas</a>
                        <a href='/analise/relatoriosDetalhados'>Relatórios detalhados</a>
                        <a href='/analise/configuracao'>Configurações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Finanças</button>
                    <div class="submenu">

                        <a href='/financas/contasCaixa'>Contas e caixas</a>
                        <a href='/financas/fornecedores'>Fornecedores</a>
                        <a href='/financas/despesasReceitas'>Despesas e receitas</a>
                        <a href=''>Operações financeiras</a>
                        <a href='/financas/documentos'>Documentos</a>
                        <a href='/financas/pagamentosOnline'>Pagamento online</a>
                        <a href='/financas/RelatoriosDetalhados'>Relatórios detalhados</a>
                        <a href='/financas/configuracao'>Configurações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Salário</button>
                    <div class="submenu">
                        <a href=''></a>
                        <a href='/salario/folhaDepagamento'>Folha de pagamento</a>
                        <a href='/salario/calculoDiario'>Cálculo diário</a>
                        <a href='/salario/calculoPeriodo'>Cálculo para o período</a>
                        <a href='/salario/regrasDeCalculo'>Regras de cálculo</a>
                        <a href='/salario/criterioDeCalculo'>Critérios de cálculo</a>
                        <a href='/salario/modeloDeCalculo'>Modelo de cálculo</a>
                        <a href='/salario/reconpensasPenalidade'>Recompensas e penalidades</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Estoque</button>
                    <div class="submenu">

                        <a href='/estoque/estoque'>Estoque</a>
                        <a href='/estoque/produtos'>Produtos</a>
                        <a href='/estoque/listaDemateriais'>Lista de materiais</a>
                        <a href='/estoque/operacoesEStoque'>Operações de estoque</a>
                        <a href='/estoque/verificacaoEstoque'>Verificação de estoque</a>
                        <a href='/estoque/ImpressaoDeEtiqueta'>Impressão de etiqueta</a>
                        <a href='/estoque/relatoriosDetalhados'>Relatórios detalhados</a>
                        <a href='/estoque/configuracao'>Configurações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <a href='/reservasOnline' class="menu-btn">Reservas Online</a>

                </div>

                <div class="menu-item">
                    <a href='/fidelidade' class="menu-btn">Fidelidade</a>

                </div>

                <div class="menu-item">
                    <a href='/integracao' >Integração</a>

                </div >

                <hr />

                <div class="menu-item">
                    <a href='/configuracoes'>Configuraçoes</a>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Minha assinatura</button>
                    <div class="submenu">

                        <a href=''>Assinatura</a>
                        <a href=''>15 Fevereiro 2024</a>
                        <a href=''>Detalhamento</a>
                        <a href=''>YR$5</a>
                        <a href=''>Contas à pagar</a>
                    </div>
                </div>

                <div class="menu-item">
                    <a href='/minhaConta' class="menu-btn">Minha conta</a>

                </div>

                <hr />

                <div class="menu-item">
                    <button class="menu-btn"></button>
                    <div class="submenu">

                        <a href=''>Base de conhecimento</a>
                        <a href=''>Enviar ticket</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Sair</button>

                </div>

            </div>
        </div>



    )
}



export default MenuLateral