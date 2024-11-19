import React, { useState } from 'react';
import '../../styles/T4.css'; // Certifique-se de que o caminho é correto

function T4() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t4-container">
      {/* Cabeçalho */}
      <header className="t4-header">
        <div className="t4-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t4-logo" />
          <span className="t4-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t4-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t4-content">
        <div className="t4-article-container">
          <h2>Como alterar minha senha de acesso:</h2>
          <ul>
            <li>Acesse o Sagres e faça login na sua conta.</li>
            <li>
              Clique no ícone no canto superior direito e selecione 
              <b> "Configurações".</b>
            </li>
            <li>Na seção de "Alterar Senha", insira sua nova senha.</li>
            <li>Confirme a nova senha digitando novamente no campo correspondente.</li>
            <li>Para finalizar, clique em <b>"Salvar"</b> ou em <b>"Cancelar"</b> para desfazer as alterações.</li>
          </ul>

          {/* Linha horizontal */}
          <hr className="t4-feedback-line" />

          {/* Feedback */}
          <div className="t4-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t4-feedback-buttons">
              <button
                className={`t4-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t4-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t4-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t4-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T4;
