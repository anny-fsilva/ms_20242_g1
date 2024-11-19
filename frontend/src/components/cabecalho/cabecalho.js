import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './../../styles/cabecalho.css'; // Importando o estilo

const Cabecalho = ({ nome }) => {
    // Estado para controlar a visibilidade do menu de perfil
    const [showMenu, setShowMenu] = useState(false);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Hook para navegação
    const navigate = useNavigate();

    // Função para ir para a página de busca
    const goToBusca = () => {
        navigate('/busca'); // Redireciona para a página /busca
    };
    const goToDashboard = () => {
        navigate('/dashboard'); // Redireciona para a página /busca
    };

    return (
        <div className="cabecalho">
            <div className="cabecalho-wrapper">
                <img src="/logosagres.png" alt="Logo Sagres" className="cabecalho-logo" />
                <span className="cabecalho-text">SAGRES</span>
                {/* Ícones à direita */}
                <div className="cabecalho-icons">
                    <div className="cabecalho-icon" onClick={goToDashboard}>
                        <i className="fas fa-home"></i> {/* Ícone de casa */}
                    </div>
                    <div className="cabecalho-icon">
                        <i className="fas fa-bell"></i> {/* Ícone de sino */}
                    </div>
                    <div className="cabecalho-icon">
                        <i className="fas fa-envelope"></i> {/* Ícone de mensagem */}
                    </div>
                    <div className="cabecalho-icon" onClick={goToBusca}>
                        <i className="fas fa-search"></i> {/* Ícone de lupa, agora com redirecionamento */}
                    </div>
                    <div className="cabecalho-icon">
                        <i className="fas fa-graduation-cap"></i> {/* Ícone de chapéu de formatura */}
                    </div>
                    {/* Substituindo o ícone de perfil por uma imagem e adicionando a ação de clique */}
                    <div className="cabecalho-icon" onClick={toggleMenu}>
                        <img src="/exemplo-foto-perfil.jpeg" alt="Imagem de Perfil" className="cabecalho-img" />
                    </div>
                </div>
                {/* Menu de Perfil */}
                {showMenu && (
                    <div className="perfil-menu">
                        <div className="perfil-menu-header">
                            <img src="/exemplo-foto-perfil.jpeg" alt="Imagem de Perfil" className="perfil-menu-img" />
                            <span className="perfil-menu-name">{nome}</span>
                        </div>
                        <button className="perfil-menu-btn">Ver Perfil</button>
                        <hr />
                        <div className="perfil-menu-options">
                            <span>Configurações</span>
                            <span>Central de Ajuda</span>
                            <hr />
                            <span>Sair</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cabecalho;
