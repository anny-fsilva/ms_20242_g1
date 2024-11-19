import React, { useState } from 'react';
import '../../styles/T5.css'; // Certifique-se de que o caminho é correto

function T5() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t5-container">
      {/* Cabeçalho */}
      <header className="t5-header">
        <div className="t5-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t5-logo" />
          <span className="t5-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t5-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t5-content">
        <div className="t5-article-container">
          <h2>Passo a passo para solicitar uma monitoria:</h2>
          <ul>
            <li>Acesse o Sagres e faça login na sua conta.</li>
            <li>
              Navegue até a aba de <b>Busca</b> no menu principal.
            </li>
            <li>
              Pesquise pela disciplina ou pelo nome do monitor desejado.
            </li>
            <li>
              Clique na monitoria escolhida para visualizar os detalhes.
            </li>
            <li>
              Selecione os <b>dias da semana</b> e os <b>horários</b> disponíveis.
            </li>
            <li>
              Clique em <b>"Solicitar Monitoria"</b> para enviar sua solicitação.
            </li>
            <li>Aguarde a resposta do monitor, que pode aceitar ou recusar a solicitação.</li>
            <li>
              Você será notificado sobre a resposta do monitor, tanto em caso de aceitação quanto de recusa.
            </li>
          </ul>

          {/* Linha horizontal */}
          <hr className="t5-feedback-line" />

          {/* Feedback */}
          <div className="t5-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t5-feedback-buttons">
              <button
                className={`t5-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t5-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t5-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t5-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T5;
