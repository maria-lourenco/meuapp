import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MenuLateral from './MenuLateral/MenuLateral';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Funcionarios from './equipe/Funcionarios';
import ConfiguracaoAnalise from './analise/configuaraçoes/Configuraçao'
import AnaliseEstatistica from './analise/estatistica/Estatistica'
import AnaliseRelatoriosDetalhados from './analise/relatoriosDetalhados/RelatorioDetalhado'
import ClienteCategoriaCliente from './clientes/categoriaClientes/CategoriaClientes'
import ClienteClientes from './clientes/clientes/Cliente'
import ClienteProgramaFidelidade from './clientes/programaFidelidade/programaFidelidade'
import Configuracao from './configuracoes/Configuraçao';
import EstoqueConfiguracao from './estoque/configuraçao/Configuraçao'
import EstoqueEstoque from './estoque/estoque/Estoque'
import EstoqueImpressaoEtiqueta from './estoque/impressaoEtiqueta/ImpressaoEtiqueta'
import EstoqueListaDeMateriais from './estoque/listaDeMateriais/ListaMateriais'
import EstoqueOperacaoEstoque from './estoque/operaçoesEstoque/OperaçoesEstoque'
import EstoqueProdutos from './estoque/produtos/Produtos'
import EstoqueRelatoriosDetalhados from './estoque/relatoriosDetalhados/RelatoriosDetalhados'
import EstoqueVerificarEstoque from './estoque/verificaçaoEstoque/VerificaçaoEstoque'
import Fidelidade from './fidelidade/Fidelidade';
import FinancasConfiguracao from './finanças/configuraçao/Configuraçao'
import FinancasContasCaixas from './finanças/contas_caixas/ContasCaixas'
import FinancasDespesasReceitas from './finanças/despesasReceitas/DespesasReceitas'
import FinancasDocumentos from './finanças/documentos/Documentos'
import FinancasFornecedores from './finanças/fornecedores/Fornecedor'
import FinancasPagamentoOnline from './finanças/pagamentoOnline/PagamentosOnline'
import FinancasRelatoriosDetalhados from './finanças/RelatoriosDetalhados/RelatoriosDetalhados'
import Integracao from './integraçao/Integraçao';
import MinhaConta from './minhaConta/MinhaConta';
import ReservasOnline from './reservasOnline/ReservasOnline';
import SalarioCalculoDiario from './salario/calculoDiario/CalculoDiario'
import SalarioCalculoPeriodo from './salario/calculoPeriodo/CalculoPeriotico'
import SalarioCriteriosDeCalculo from './salario/criteriosDeCalculo/CriteriosDeCalculo'
import SalarioFolhaPagamento from './salario/folhaPagamento/FolhaPagamento'
import SalarioModeloDeCalculo from './salario/modeloDeCalculo/ModeloDECalculo'
import SalarioRecompensasPenalidades from './salario/recompensasPenalidades/RecompensasPenalidades'
import SalarioRegrasDeCalculo from './salario/regrasDeCalculo/RegrasDeCalculo'
import VisaoGeralAgendamento from './visaoGeral/agendamento/Agendamento'
import VisaoGeralAvaliacoes from './visaoGeral/avaliaçoes/Avaliaçoes'
import VisaoGeralEventos from './visaoGeral/eventos/Eventos'
import VisaoGeralLigacoes from './visaoGeral/ligaçoes/Ligaçoes'
import VisaoGeralMenssagens from './visaoGeral/mensagens/Menssagens'
import VisaoGeralOperacoesDeDados from './visaoGeral/operaçoesDeDados/OperaçoesDeDados'
import VisaoGeralRegistroDealteracao from './visaoGeral/RegistroDeAlteraçoes/RegistroDeAlteraçao'
import VisaoGeralResumo from './visaoGeral/resumo/REsumo'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='corpo'>
      <MenuLateral />
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Funcionarios />} />
            <Route path='/analise/configuracao' element={<ConfiguracaoAnalise />} />
            <Route path='/analise/estatistica' element={<AnaliseEstatistica />} />
            <Route path='/analise/relatoriosDetalhados' element={<AnaliseRelatoriosDetalhados />} />
            <Route path='/cliente/categoriaClientes' element={<ClienteCategoriaCliente />} />
            <Route path='/cliente/clientes' element={<ClienteClientes />} />
            <Route path='/cliente/programaFidelidade' element={<ClienteProgramaFidelidade />} />
            <Route path='/configuracoes' element={<Configuracao />} />
            <Route path='/estoque/configuracao' element={<EstoqueConfiguracao />} />
            <Route path='/estoque/ImpressaoDeEtiqueta' element={<EstoqueImpressaoEtiqueta />} />
            <Route path='/estoque/listaDemateriais' element={<EstoqueListaDeMateriais />} />
            <Route path='/estoque/operacoesEStoque' element={<EstoqueOperacaoEstoque />} />
            <Route path='/estoque/produtos' element={<EstoqueProdutos />} />
            <Route path='/estoque/relatoriosDetalhados' element={<EstoqueRelatoriosDetalhados />}/>
            <Route path='/estoque/verificacaoEstoque' element={<EstoqueVerificarEstoque />} />
            <Route path='/fidelidade' element={<Fidelidade />} />
            <Route path='/financas/configuracao' element={<FinancasConfiguracao />} />
            <Route path='/financas/contasCaixa' element={<FinancasContasCaixas />} />
            <Route path='/financas/despesasReceitas' element={<FinancasDespesasReceitas />} />
            <Route path='/financas/documentos' element={<FinancasDocumentos />} />
            <Route path='/financas/fornecedores' element={<FinancasFornecedores />} />
            <Route path='/financas/pagamentosOnline' element={<FinancasPagamentoOnline />} />
            <Route path='/financas/RelatoriosDetalhados' element={<FinancasRelatoriosDetalhados />} />
            <Route path='/integracao' element={<Integracao />} />
            <Route path='/minhaConta' element={<MinhaConta />} />
            <Route path='/reservasOnline' element={<ReservasOnline />} />
            <Route path='/salario/calculoDiario' element={<SalarioCalculoDiario />} />
            <Route path='/salario/calculoPeriodo' element={<SalarioCalculoPeriodo />} />
            <Route path='/salario/criterioDeCalculo' element={<SalarioCriteriosDeCalculo />} />
            <Route path='/salario/folhaDepagamento' element={<SalarioFolhaPagamento />} />
            <Route path='/salario/modeloDeCalculo' element={<SalarioModeloDeCalculo />} />
            <Route path='/salario/reconpensasPenalidade' element={<SalarioRecompensasPenalidades />} />
            <Route path='/salario/regrasDeCalculo' element={<SalarioRegrasDeCalculo />} />
            <Route path='/visaoGeral/agendamento' element={<VisaoGeralAgendamento />} />
            <Route path='/visaoGeral/avaliacoes' element={<VisaoGeralAvaliacoes />} />
            <Route path='/visaoGeral/eventos' element={<VisaoGeralEventos />} />
            <Route path='/visaoGeral/ligacoes' element={<VisaoGeralLigacoes />} />
            <Route path='/visaoGeral/menssagens' element={<VisaoGeralMenssagens />} />
            <Route path='/visaoGeral/operacoesDeDados' element={<VisaoGeralOperacoesDeDados />} />
            <Route path='/visaoGeral/registroDeAlteraçoes' element={<VisaoGeralRegistroDealteracao />} />
            <Route path='/visaoGeral/resumo' element={<VisaoGeralResumo />} />
          </Routes>
        </Router>

      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
