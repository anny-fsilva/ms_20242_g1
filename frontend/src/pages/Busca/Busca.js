import React, { useState } from 'react';
import Cabecalho from './../../components/cabecalho/cabecalho';  
import './../../styles/Busca.css'; 

const Busca = () => {
    const [userName, setUserName] = useState("Nome do Usuário"); // Defina o nome do usuário aqui
    const [isPopularSelected, setIsPopularSelected] = useState(false);
    const [monitorias, setMonitorias] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);  // Controla a visibilidade do filtro
    const [selectedFilters, setSelectedFilters] = useState({
        tipo: '',
        valor: '',
        avaliacao: '',
        periodo: '',
        turno: '',
    }); // Para armazenar os filtros selecionados

    const handleSearchSubmit = () => {
        console.log("Busca realizada!");
    };

    const handlePopularClick = () => {
        setIsPopularSelected(!isPopularSelected);
    };

    const handleFilterClick = () => {
        setIsFilterOpen(!isFilterOpen);  // Abre ou fecha o modal de filtros
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSelectedFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            tipo: '',
            valor: '',
            avaliacao: '',
            periodo: '',
            turno: '',
        });
    };

    const handleApplyFilters = () => {
        console.log("Filtros aplicados:", selectedFilters);
        // Aqui você pode filtrar as monitorias com base nos filtros selecionados
        setIsFilterOpen(false);
    };

    return (
        <div className="busca-container">
            <div>
                <Cabecalho nome={userName} />
                <div className="busca-content">
                    <div className="busca-input-container">
                        <input
                            type="text"
                            className="busca-input"
                            placeholder="Procure por disciplinas ou monitores"
                        />
                        <img
                            src="https://img.icons8.com/ios/50/google-web-search.png"
                            alt="search-icon"
                            className="search-icon"
                            onClick={handleSearchSubmit}
                        />
                    </div>
                    <div className="busca-sections">
                        <div 
                            className={`section-card mais-populares ${isPopularSelected ? 'selected' : ''}`}
                            onClick={handlePopularClick}
                        >
                            <p>Mais Populares</p>
                        </div>
                        <div className="section-card filtros" onClick={handleFilterClick}>
                            <p>Filtros</p>
                        </div>
                    </div>
                    <hr className="divider" />
                    
                    {/* Modal de Filtros */}
                    {isFilterOpen && (
                        <div className="filter-modal">
                            <div className="filter-group">
                                <label>Tipo de Monitoria</label>
                                <select name="tipo" value={selectedFilters.tipo} onChange={handleFilterChange}>
                                    <option value="">Selecione</option>
                                    <option value="online">Online</option>
                                    <option value="presencial">Presencial</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>Valor</label>
                                <select name="valor" value={selectedFilters.valor} onChange={handleFilterChange}>
                                    <option value="">Selecione</option>
                                    <option value="gratis">Gratuito</option>
                                    <option value="pago">Pago</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>Avaliação do Monitor</label>
                                <select name="avaliacao" value={selectedFilters.avaliacao} onChange={handleFilterChange}>
                                    <option value="">Selecione</option>
                                    <option value="1">1 estrela</option>
                                    <option value="2">2 estrelas</option>
                                    <option value="3">3 estrelas</option>
                                    <option value="4">4 estrelas</option>
                                    <option value="5">5 estrelas</option>
                                </select>
                            </div>
                            
                            <div className="filter-group">
                                <label>Turno</label>
                                <select name="turno" value={selectedFilters.turno} onChange={handleFilterChange}>
                                    <option value="">Selecione</option>
                                    <option value="matutino">Matutino</option>
                                    <option value="vespertino">Vespertino</option>
                                    <option value="noturno">Noturno</option>
                                </select>
                            </div>
                            <div className="filter-actions">
                                <button onClick={handleClearFilters}>Limpar</button>
                                <button onClick={handleApplyFilters}>Feito</button>
                            </div>
                        </div>
                    )}

                    {/* Se houver monitorias, exibe a lista ou uma mensagem */}
                    {monitorias.length > 0 ? (
                        <div className="monitorias-lista">
                            {monitorias.map((monitoria, index) => (
                                <div key={index} className="monitoria-card">
                                    <div className="monitoria-header">
                                        <img src={monitoria.fotoPerfil} alt="Perfil" className="monitoria-foto" />
                                        <div className="monitoria-info">
                                            <p className="monitoria-disciplina">{monitoria.disciplina}</p>
                                            <div className="monitoria-linhas">
                                                <div className="monitoria-linha" />
                                                <p className="monitoria-monitor">{monitoria.monitor}</p>
                                                <p className="monitoria-periodo">{monitoria.periodo}</p>
                                                <p className="monitoria-graducao">{monitoria.graduacao}</p>
                                                <div className="monitoria-linha" />
                                                <div className="monitoria-estrelas">
                                                    <span className="estrela">&#9733;</span> {monitoria.estrelas}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="monitoria-preco">
                                        <p>{monitoria.preco ? `R$ ${monitoria.preco}` : "Gratuito"}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="sem-monitorias">
                            <p>Não há monitorias disponíveis no momento.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Busca;
