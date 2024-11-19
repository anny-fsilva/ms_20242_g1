import React, { useState } from 'react';
import '../../styles/T12.css'; // Certifique-se de que o caminho é correto

function T12() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t12-container">
      {/* Cabeçalho */}
      <header className="t12-header">
        <div className="t12-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t12-logo" />
          <span className="t12-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t12-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t12-content">
        <div className="t12-article-container">
          <h2>Dicas para usar o chat de forma eficiente</h2>
          <p>
            O chat é uma ferramenta importante para facilitar a comunicação entre você e seu monitor. Para garantir um uso eficiente, siga as dicas abaixo:
          </p>
          <ul>
            <li>
              <b>Seja claro e direto:</b> Explique suas dúvidas ou pedidos de forma objetiva para evitar confusões.
            </li>
            <li>
              <b>Evite mensagens longas:</b> Divida informações em mensagens menores e mais fáceis de entender.
            </li>
            <li>
              <b>Respeite os horários:</b> Antes de enviar mensagens, verifique se o monitor está disponível.
            </li>
            <li>
              <b>Mantenha um tom respeitoso:</b> A comunicação deve ser educada e profissional.
            </li>
            <li>
              <b>Planeje a conversa:</b> Organize seus questionamentos antes de iniciar o chat para agilizar o processo.
            </li>
          </ul>
          <p>
            Com essas dicas, você poderá aproveitar ao máximo as funcionalidades do chat, tornando o processo de monitoria mais produtivo e agradável para ambos.
          </p>

          {/* Linha horizontal */}
          <hr className="t12-feedback-line" />

          {/* Feedback */}
          <div className="t12-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t12-feedback-buttons">
              <button
                className={`t12-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t12-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t12-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t12-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T12;
