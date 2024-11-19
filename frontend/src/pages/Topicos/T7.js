import React, { useState } from 'react';
import '../../styles/T7.css'; // Certifique-se de que o caminho é correto

function T7() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t7-container">
      {/* Cabeçalho */}
      <header className="t7-header">
        <div className="t7-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t7-logo" />
          <span className="t7-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t7-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t7-content">
        <div className="t7-article-container">
          <h2>Como o monitor aceita ou recusa solicitações:</h2>
          <p><b>1. Acesse a aba "Monitorias":</b></p>
          <ul>
            <li>O monitor verá as solicitações pendentes.</li>
          </ul>

          <p><b>2. Analise a solicitação:</b></p>
          <ul>
            <li>Veja os detalhes da solicitação e avalie se pode atendê-la.</li>
          </ul>

          <p><b>3. Aceite ou recuse a solicitação:</b></p>
          <ul>
            <li>
              Clique em <b>"Aceitar"</b> ou <b>"Recusar"</b> para responder à solicitação do aluno.
            </li>
          </ul>

          {/* Linha horizontal */}
          <hr className="t7-feedback-line" />

          {/* Feedback */}
          <div className="t7-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t7-feedback-buttons">
              <button
                className={`t7-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t7-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t7-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t7-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T7;
