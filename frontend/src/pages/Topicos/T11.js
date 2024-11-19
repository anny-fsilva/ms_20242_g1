import React, { useState } from 'react';
import '../../styles/T11.css'; // Certifique-se de que o caminho é correto

function T11() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t11-container">
      {/* Cabeçalho */}
      <header className="t11-header">
        <div className="t11-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t11-logo" />
          <span className="t11-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t11-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t11-content">
        <div className="t11-article-container">
          <h2>Como funciona o chat após o pagamento?</h2>
          <p>
            Após a confirmação do pagamento, o acesso ao chat com o monitor será liberado. 
            Você poderá conversar diretamente com o monitor para planejar as aulas e tirar dúvidas. Veja como utilizá-lo:
          </p>
          <ul>
            <li>
              <b>Acesse o chat:</b> Após o pagamento, será direcionado para a conversa com o monitor na página de chat.
            </li>
            <li>
              <b>Converse com o monitor:</b> Utilize o espaço de mensagens para planejar o conteúdo, combinar horários e tirar dúvidas diretamente.
            </li>
            <li>
              <b>Respeito e ética:</b> Mantenha um tom respeitoso durante as interações no chat. Qualquer comportamento inadequado poderá ser reportado.
            </li>
          </ul>
          <p>
            O chat é uma ferramenta essencial para garantir uma comunicação eficiente entre alunos e monitores, permitindo que ambas as partes organizem o processo de monitoria.
          </p>

          {/* Linha horizontal */}
          <hr className="t11-feedback-line" />

          {/* Feedback */}
          <div className="t11-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t11-feedback-buttons">
              <button
                className={`t11-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t11-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t11-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t11-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T11;
