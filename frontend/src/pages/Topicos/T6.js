import React, { useState } from 'react';
import '../../styles/T6.css'; // Certifique-se de que o caminho é correto

function T6() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t6-container">
      {/* Cabeçalho */}
      <header className="t6-header">
        <div className="t6-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t6-logo" />
          <span className="t6-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t6-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t6-content">
        <div className="t6-article-container">
          <h2>O que acontece após solicitar uma monitoria:</h2>
          <p><b>Aguarde a resposta do monitor:</b></p>
          <ul>
            <li>O monitor verá sua solicitação e poderá <b>aceitar</b> ou <b>recusar</b>. Você será notificado sobre a resposta.</li>
          </ul>

          <p><b>Monitor aceita a solicitação:</b></p>
          <ul>
            <li>
              Caso aceito, na página de monitoria, no ícone de um 
              <b> chapéu de formatura</b> na seção "A iniciar".
            </li>
            <li>
              Clique em "Iniciar" para ser redirecionado à tela de <b>pagamento</b>.
            </li>
            <li>
              Após o pagamento, você terá acesso ao <b>chat</b> com o monitor.
            </li>
          </ul>

          <p><b>Monitor recusa a solicitação:</b></p>
          <ul>
            <li>
              Caso recusado, você poderá tentar <b>solicitar outro monitor</b> ou 
              <b> alterar sua solicitação</b>.
            </li>
          </ul>

          {/* Linha horizontal */}
          <hr className="t6-feedback-line" />

          {/* Feedback */}
          <div className="t6-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t6-feedback-buttons">
              <button
                className={`t6-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t6-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t6-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t6-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T6;
