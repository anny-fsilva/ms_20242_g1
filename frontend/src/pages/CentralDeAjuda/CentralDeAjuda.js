import React, { useState } from 'react';
import '../../styles/CentralDeAjuda.css';

function CentralAjuda() {
    const [searchQuery, setSearchQuery] = useState(''); // Estado para o campo de busca

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value); // Atualiza o valor da busca
    };
  
    const handleSearchSubmit = () => {
      // Lógica para buscar (pode ser para direcionar ou exibir algo)
      console.log("Buscando por:", searchQuery);
    };

    return (
      <div className="help-container">
        {/* Cabeçalho */}
        <div className="header">
          <div className="header-wrapper">
            <img src="/logosagres.png" alt="Sagres Logo" className="help-logo" />
            <span className="sagres-text">SAGRES</span>
            <a href="/login" className="help-link link-style">Acessar</a>
          </div>
        </div>
  
        {/* Corpo da página */}
        <div className="help-body">
          <h2>COMO PODEMOS AJUDAR?</h2>
  
          {/* Caixa de Pesquisa */}
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              id="search" 
              placeholder="Digite uma dúvida ou assunto. Ex: O que é o Sagres?"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <img 
              src="https://img.icons8.com/ios/50/google-web-search.png" 
              alt="search-icon" 
              className="search-icon" 
              onClick={handleSearchSubmit}
            />
          </form>
  
          {/* Explorar Tópicos */}
          <div className="explore-topics">
            <a href="/explorartopicos" className="explore-link">
              <p>Explorar tópicos</p>
            </a>
          </div>
        </div>
      </div>
    );
}

export default CentralAjuda;
