import React, { useState } from 'react';
import '../../styles/T3.css'; // Certifique-se de que o caminho é correto

function T3() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t3-container">
      {/* Cabeçalho */}
      <header className="t3-header">
        <div className="t3-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t3-logo" />
          <span className="t3-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t3-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t3-content">
        <div className="t3-article-container">
          <h2>Como atualizar meus dados pessoais:</h2>
          <ul>
            <li>Acesse o Sagres e entre na sua conta.</li>
            <li>
              No canto superior direito, clique no ícone de perfil e depois em
              <b> "Ver Perfil".</b>
            </li>
            <li>Clique no ícone de lápis (pincel) para editar.</li>
            <li>Edite as informações desejadas, como dados ou foto de perfil.</li>
            <li>Para finalizar, clique em <b>"Salvar"</b> ou em <b>"Cancelar"</b> para desfazer as alterações.</li>
          </ul>

          {/* Linha horizontal */}
          <hr className="t3-feedback-line" />

          {/* Feedback */}
          <div className="t3-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t3-feedback-buttons">
              <button
                className={`t3-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t3-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t3-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t3-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T3;
