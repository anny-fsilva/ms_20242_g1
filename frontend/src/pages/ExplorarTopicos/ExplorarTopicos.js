import React, { useState } from 'react';
import '../../styles/ExplorarTopicos.css';

function ExplorarTopicos() {
    const [showSubtopicosConta, setShowSubtopicosConta] = useState(false);  
    const [showSubtopicosSeguranca, setShowSubtopicosSeguranca] = useState(false);
    const [showSubtopicosSolicitar, setShowSubtopicosSolicitar] = useState(false);  
    const [showSubtopicosAceitacao, setShowSubtopicosAceitacao] = useState(false);
    const [showSubtopicosPagamento, setShowSubtopicosPagamento] = useState(false);
    const [showSubtopicosChat, setShowSubtopicosChat] = useState(false);  
    const [showSubtopicosGerenciamento, setShowSubtopicosGerenciamento] = useState(false);
    const [showSubtopicosFuncoes, setShowSubtopicosFuncoes] = useState(false);
    const [showSubtopicosInformacoes, setShowSubtopicosInformacoes] = useState(false);
    

    const toggleSubtopicosConta = () => {
        setShowSubtopicosConta(!showSubtopicosConta); 
    };
    const toggleSubtopicosSeguranca = () => {
        setShowSubtopicosSeguranca(!showSubtopicosSeguranca);  
    };
    const toggleSubtopicosSolicitar = () => {
        setShowSubtopicosSolicitar(!showSubtopicosSolicitar);  
    };
    const toggleSubtopicosAceitacao = () => {
        setShowSubtopicosAceitacao(!showSubtopicosAceitacao);  
    };
    const toggleSubtopicosPagamento = () => {
        setShowSubtopicosPagamento(!showSubtopicosPagamento);  
    };
    const toggleSubtopicosChat = () => {
        setShowSubtopicosChat(!showSubtopicosChat);  
    };
    const toggleSubtopicosGerenciamento = () => {
        setShowSubtopicosGerenciamento(!showSubtopicosGerenciamento);  
    };
    const toggleSubtopicosFuncoes = () => {
        setShowSubtopicosFuncoes(!showSubtopicosFuncoes);  
    };
    const toggleSubtopicosInfomacoes = () => {
        setShowSubtopicosInformacoes(!showSubtopicosInformacoes);  
    };
    

    return (
        <div className="explorar-container">
            {/* Cabeçalho fixo */}
            <div className="header">
                <div className="header-wrapper">
                    <img src="/logosagres.png" alt="Sagres Logo" className="help-logo" />
                    <span className="sagres-text">SAGRES</span>
                    <a href="/login" className="help-link link-style">Acessar</a>
                </div>
            </div>

            {/* Corpo da página */}
            <div className="explorar-body">
                {/* Campo de pesquisa com ícone */}
                <div className="search-container">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Buscar tópicos..." 
                    />
                </div>

                {/* Retângulo com tópicos fixos */}
                <div className="explorar-item">
                    {/* Tópico: Problemas na conta */}
                    <div className="topico-header">
                        <span className="profile-icon">👤</span>
                        <span>Conta e Perfil</span>
                    </div>
                    <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Criar e Configurar Conta</span>
                        <button className="seta" onClick={toggleSubtopicosConta}>
                            <img 
                                src={showSubtopicosConta ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosConta && (
                        <div className="subtopicos">
                            <a href="/topico/Como-criar-minha-conta-no-Sagres" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como criar minha conta no Sagres?
                            </a>
                            <a href="/topico/Passo-a-passo-para-configurar-meu-perfil-inicial" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Passo a passo para configurar meu perfil inicial.
                            </a>
                           
                        </div>
                        
                    )}
                     <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Editar Informações e Segurança</span>
                        <button className="seta" onClick={toggleSubtopicosSeguranca}>
                            <img 
                                src={showSubtopicosSeguranca ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosSeguranca && (
                        <div className="subtopicos">
                            <a href="/topico/Como-atualizar-meus-dados-pessoais" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como atualizar meus dados pessoais?
                            </a>
                            <a href="/topico/Como-alterar-minha-senha-de-acesso" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como alterar minha senha de acesso?
                            </a>
                           
                        </div>
                        
                    )}
                    
                </div>

                {/* Tópico: Problemas de Acesso */}
                <div className="explorar-item">
                    <div className="topico-header">
                        <span className="profile-icon">📚</span>
                        <span>Solicitação e Agendamento de Monitorias</span>
                    </div>
                    <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Como Solicitar Monitorias</span>
                        <button className="seta" onClick={toggleSubtopicosSolicitar}>
                            <img 
                                src={showSubtopicosSolicitar ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosSolicitar && (
                        <div className="subtopicos">
                            <a href="/topico/Passo-a-passo-para-solicitar-uma-monitoria" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Passo a passo para solicitar uma monitoria.
                            </a>
                            <a href="/topico/O-que-acontece-após-solicitar-uma-monitoria" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                O que acontece após solicitar uma monitoria?
                                </a>
                            

                        </div>
                    )}
                    <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Aceitação ou Recusa de Monitorias</span>
                        <button className="seta" onClick={toggleSubtopicosAceitacao}>
                            <img 
                                src={showSubtopicosAceitacao ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosAceitacao && (
                        <div className="subtopicos">
                            <a href="/topico/Como-o-monitor-aceita-ou-recusa-solicitações" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como o monitor aceita ou recusa solicitações?
                            </a>
                            <a href="/topico/O-que-acontece-se-a-solicitação-for-recusada" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                O que acontece se a solicitação for recusada?
                                </a>
                            

                        </div>
                    )}
                     <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Pagamento de Monitorias</span>
                        <button className="seta" onClick={toggleSubtopicosPagamento}>
                            <img 
                                src={showSubtopicosPagamento ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosPagamento && (
                        <div className="subtopicos">
                            <a href="/topico/Como-realizar-o-pagamento-de-uma-monitoria" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como realizar o pagamento de uma monitoria?
                            </a>
                            <a href="/topico/Por-que-o-pagamento-é-necessário-para-liberar-o-chat" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Por que o pagamento é necessário para liberar o chat?
                                </a>
                            

                        </div>
                    )}
       
                </div>
                {/* Retângulo com tópicos de Aulas e Tutoria */}
                <div className="explorar-item">
                    <div className="topico-header">
                        <span className="profile-icon">💬</span>
                        <span>Chat e Comunicação</span>
                    </div>
                    <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Liberação e Uso do Chat</span>
                        <button className="seta" onClick={toggleSubtopicosChat}>
                            <img 
                                src={showSubtopicosChat ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosChat && (
                        <div className="subtopicos">
                            <a href="/topico/Como-funciona-o-chat-após-o-pagamento" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como funciona o chat após o pagamento?
                            </a>
                            <a href="/topico/Dicas-para-usar-o-chat-de-forma-eficiente" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Dicas para usar o chat de forma eficiente.
                            </a>
                        
                        </div>
                    )}

                    
                </div>
                
                {/* Retângulo com tópicos de Aulas e Tutoria */}
                <div className="explorar-item">
                    <div className="topico-header">
                        <span className="profile-icon">⚙️</span>
                        <span>Funcionalidades e Configurações</span>
                    </div>
                    <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Gerenciamento de Monitorias</span>
                        <button className="seta" onClick={toggleSubtopicosGerenciamento}>
                            <img 
                                src={showSubtopicosGerenciamento ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosGerenciamento && (
                        <div className="subtopicos">
                            <a href="/topico/Como-acompanhar-o-status-das-minhas-solicitações-de-monitoria" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como acompanhar o status das minhas solicitações de monitoria?
                            </a>
                            <a href="/topico/Onde-visualizar-o-histórico-de-aulas-e-monitorias" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Onde visualizar o histórico de aulas e monitorias?
                            </a>
                          
                        </div>
                    )}
                     <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Funções de Aluno e Monitor</span>
                        <button className="seta" onClick={toggleSubtopicosFuncoes}>
                            <img 
                                src={showSubtopicosFuncoes ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosFuncoes && (
                        <div className="subtopicos">
                            <a href="/topico/Como-atuar-como-aluno-e-monitor-no-mesmo-perfil" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como atuar como aluno e monitor no mesmo perfil?
                            </a>
                            <a href="/topico/Critérios-para-oferecer-monitoria-como-monitor" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Critérios para oferecer monitoria como monitor.
                            </a>
                          
                        </div>
                    )}
  
                    
                </div>
                 {/* Retângulo com tópicos de Aulas e Tutoria */}
                 <div className="explorar-item">
                    <div className="topico-header">
                        <span className="profile-icon">🏠</span>
                        <span>Sobre o Sagres</span>
                    </div>
                    <hr className="linha-horizontal" />
                    <div className="topico">
                        <span>Informações Gerais Sobre o Sagres</span>
                        <button className="seta" onClick={toggleSubtopicosInfomacoes}>
                            <img 
                                src={showSubtopicosInformacoes ? "https://img.icons8.com/ios/50/collapse-arrow--v1.png" : "https://img.icons8.com/ios/50/expand-arrow--v1.png"} 
                                alt="Seta"
                                className="seta-img"
                            />
                        </button>
                    </div>

                    {showSubtopicosInformacoes && (
                        <div className="subtopicos">
                            <a href="/topico/O-que-é-o-Sagres" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                O que é o Sagres?
                            </a>
                            <a href="/topico/Por-que-o-Sagres-foi-criado" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Por que o Sagres foi criado?
                            </a>
                            <a href="/topico/Como-o-Sagres-funciona" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Como o Sagres funciona?
                            </a>
                            <a href="/topico/Principais-recursos-do-Sagres" className="subtopico-link">
                                <img src="https://img.icons8.com/ios/50/document--v1.png" alt="Documento" className="document-icon" />
                                Principais recursos do Sagres:
                            </a>
                        </div>
                    )}

                   
                </div>
            </div>
        </div>
    );
}

export default ExplorarTopicos;
