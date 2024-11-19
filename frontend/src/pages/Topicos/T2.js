import React, { useState } from 'react';
import '../../styles/T2.css'; // Certifique-se de que o caminho é correto

function T2() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t2-container">
      {/* Cabeçalho */}
      <header className="t2-header">
        <div className="t2-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t2-logo" />
          <span className="t2-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t2-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t2-content">
        <div className="t2-article-container">
          <h2>Passo a passo para configurar seu perfil inicial:</h2>
          <ul>
            <li>Acesse o Sagres e entre na sua conta.</li>
            <li>
              No canto superior direito, clique no ícone de perfil e depois em
              <b> "Configurações".</b>
            </li>
            <li>Adicione uma foto de perfil.</li>
            <li>Clique na opção para adicionar uma foto, se desejar.</li>
            <li>Preencha informações adicionais:</li>
            <li>Complete com suas skills, biografia, e outras informações.</li>
            <li>Após preencher tudo, clique no botão "Salvar" para concluir.</li>
         
          </ul>

          {/* Linha horizontal */}
          <hr className="t2-feedback-line" />

          {/* Feedback */}
          <div className="t2-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t2-feedback-buttons">
              <button
                className={`t2-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t2-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t2-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t2-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T2;


