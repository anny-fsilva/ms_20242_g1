import React, { useState } from 'react';
import '../../styles/T14.css'; // Certifique-se de que o caminho é correto

function T14() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t14-container">
      {/* Cabeçalho */}
      <header className="t14-header">
        <div className="t14-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t14-logo" />
          <span className="t14-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t14-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t14-content">
        <div className="t14-article-container">
          <h2>Onde visualizar o histórico de aulas e monitorias</h2>
          <p>
            Para visualizar o histórico completo de aulas e monitorias realizadas na plataforma Sagres, siga os passos abaixo:
          </p>
          <ul>
            <li>
              <b>Acesse a aba "Monitoria":</b> No menu principal, clique na aba "Monitoria".
            </li>
            <li>
              <b>Visualize a seção "Em Andamento":</b> Dentro da página de monitorias, localize a seção "Em Andamento".  
              Nessa seção, clique no botão "Ver Detalhes" ao lado da respectiva monitoria para acessar informações detalhadas, como datas e horário.
            </li>
            <li>
              <b>Consulte a seção "Concluídas":</b> Para monitorias já finalizadas, acesse a seção "Concluídas". Aqui, você pode revisar todas as monitorias realizadas e conferir os detalhes, como registros de aulas.
            </li>
          </ul>
          <p>
            Essas opções permitem acompanhar tanto o progresso das suas monitorias em andamento quanto consultar o histórico das finalizadas.
          </p>

          {/* Linha horizontal */}
          <hr className="t14-feedback-line" />

          {/* Feedback */}
          <div className="t14-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t14-feedback-buttons">
              <button
                className={`t14-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t14-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t14-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t14-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T14;
