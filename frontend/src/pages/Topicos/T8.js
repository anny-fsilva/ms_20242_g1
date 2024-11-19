import React, { useState } from 'react';
import '../../styles/T8.css'; // Certifique-se de que o caminho é correto

function T8() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t8-container">
      {/* Cabeçalho */}
      <header className="t8-header">
        <div className="t8-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t8-logo" />
          <span className="t8-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t8-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t8-content">
        <div className="t8-article-container">
          <h2>O que acontece se a solicitação for recusada?</h2>
          <p>
            Se o monitor recusar sua solicitação, você ainda poderá tentar 
            outras opções. Veja abaixo o que você pode fazer:
          </p>
          <ul>
            <li>
              <b>1. Solicitar outro monitor:</b> Navegue pela aba de busca e 
              escolha outro monitor para enviar uma nova solicitação.
            </li>
            <li>
              <b>2. Alterar a solicitação:</b> Revise os horários ou dias sugeridos 
              e envie novamente para o mesmo monitor ou para outro.
            </li>
          </ul>
          <p>
            Não desista! Sempre há outras oportunidades para conseguir a monitoria que você precisa.
          </p>

          {/* Linha horizontal */}
          <hr className="t8-feedback-line" />

          {/* Feedback */}
          <div className="t8-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t8-feedback-buttons">
              <button
                className={`t8-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t8-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t8-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t8-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T8;
