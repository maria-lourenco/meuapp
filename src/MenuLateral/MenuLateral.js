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
                        <a className='aBarraLatera' href=''>Funcionário 1</a>
                    </div>

                </div>

                <div class="menu-item">
                    <button class="menu-btn">Clientes</button>
                    <div class="submenu">
                        <a className='aBarraLatera' href='/cliente/clientes'>Clientes</a>
                        <a className='aBarraLatera' href='/cliente/categoriaClientes'>Categoria de Clientes</a>
                        <a className='aBarraLatera' href='/cliente/programaFidelidade'>Programa de Fidelidade</a>
                    </div>
                </div>
                <div class="menu-item">
                    <button class="menu-btn">Visão Geral</button>
                    <div class="submenu">
                        <a className='aBarraLatera' href='/visaoGeral/resumo'>Resumo</a>
                        <a className='aBarraLatera' href='/visaoGeral/agendamento'>Agendamento</a>
                        <a className='aBarraLatera' href='/visaoGeral/eventos'>Eventos</a>
                        <a className='aBarraLatera' href='/visaoGeral/avaliacoes'>Avaliações</a>
                        <a className='aBarraLatera' href='/visaoGeral/menssagens'>Mensagens</a>
                        <a className='aBarraLatera' href='/visaoGeral/ligacoes'>Ligações</a>
                        <a className='aBarraLatera' href='/visaoGeral/operacoesDeDados'>Operações de Dados</a>
                        <a className='aBarraLatera' href='/visaoGeral/registroDeAlteraçoes'>Registro de Alterações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Análise</button>
                    <div class="submenu">
                        <a className='aBarraLatera' href='/analise/estatistica'>Estatísticas</a>
                        <a className='aBarraLatera' href='/analise/relatoriosDetalhados'>Relatórios detalhados</a>
                        <a className='aBarraLatera' href='/analise/configuracao'>Configurações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Finanças</button>
                    <div class="submenu">

                        <a className='aBarraLatera' href='/financas/contasCaixa'>Contas e caixas</a>
                        <a className='aBarraLatera' href='/financas/fornecedores'>Fornecedores</a>
                        <a className='aBarraLatera' href='/financas/despesasReceitas'>Despesas e receitas</a>
                        <a className='aBarraLatera' href=''>Operações financeiras</a>
                        <a className='aBarraLatera' href='/financas/documentos'>Documentos</a>
                        <a className='aBarraLatera' href='/financas/pagamentosOnline'>Pagamento online</a>
                        <a className='aBarraLatera' href='/financas/RelatoriosDetalhados'>Relatórios detalhados</a>
                        <a className='aBarraLatera' href='/financas/configuracao'>Configurações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Salário</button>
                    <div class="submenu">
                        <a className='aBarraLatera' href=''></a>
                        <a className='aBarraLatera' href='/salario/folhaDepagamento'>Folha de pagamento</a>
                        <a className='aBarraLatera' href='/salario/calculoDiario'>Cálculo diário</a>
                        <a className='aBarraLatera' href='/salario/calculoPeriodo'>Cálculo para o período</a>
                        <a className='aBarraLatera' href='/salario/regrasDeCalculo'>Regras de cálculo</a>
                        <a className='aBarraLatera' href='/salario/criterioDeCalculo'>Critérios de cálculo</a>
                        <a className='aBarraLatera' href='/salario/modeloDeCalculo'>Modelo de cálculo</a>
                        <a className='aBarraLatera' href='/salario/reconpensasPenalidade'>Recompensas e penalidades</a>
                    </div>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Estoque</button>
                    <div class="submenu">

                        <a className='aBarraLatera' href='/estoque/estoque'>Estoque</a>
                        <a className='aBarraLatera' href='/estoque/produtos'>Produtos</a>
                        <a className='aBarraLatera' href='/estoque/listaDemateriais'>Lista de materiais</a>
                        <a className='aBarraLatera' href='/estoque/operacoesEStoque'>Operações de estoque</a>
                        <a className='aBarraLatera' href='/estoque/verificacaoEstoque'>Verificação de estoque</a>
                        <a className='aBarraLatera' href='/estoque/ImpressaoDeEtiqueta'>Impressão de etiqueta</a>
                        <a className='aBarraLatera' href='/estoque/relatoriosDetalhados'>Relatórios detalhados</a>
                        <a className='aBarraLatera' href='/estoque/configuracao'>Configurações</a>
                    </div>
                </div>

                <div class="menu-item">
                    <a className='aBarraLatera' href='/reservasOnline' class="menu-btn">Reservas Online</a>

                </div>

                <div class="menu-item">
                    <a className='aBarraLatera' href='/fidelidade' class="menu-btn">Fidelidade</a>

                </div>

                <div class="menu-item">
                    <a className='aBarraLatera' href='/integracao' >Integração</a>

                </div >

                <hr />

                <div class="menu-item">
                    <a className='aBarraLatera' href='/configuracoes'>Configuraçoes</a>
                </div>

                <div class="menu-item">
                    <button class="menu-btn">Minha assinatura</button>
                    <div class="submenu">

                        <a className='aBarraLatera' href=''>Assinatura</a>
                        <a className='aBarraLatera' href=''>15 Fevereiro 2024</a>
                        <a className='aBarraLatera' href=''>Detalhamento</a>
                        <a className='aBarraLatera' href=''>YR$5</a>
                        <a className='aBarraLatera' href=''>Contas à pagar</a>
                    </div>
                </div>

                <div class="menu-item">
                    <a className='aBarraLatera' href='/minhaConta' class="menu-btn">Minha conta</a>

                </div>

                <hr />

                <div class="menu-item">
                    <button class="menu-btn"></button>
                    <div class="submenu">

                        <a className='aBarraLatera' href=''>Base de conhecimento</a>
                        <a className='aBarraLatera' href=''>Enviar ticket</a>
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