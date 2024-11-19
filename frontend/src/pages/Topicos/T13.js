import React, { useState } from 'react';
import '../../styles/T13.css'; // Certifique-se de que o caminho é correto

function T13() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t13-container">
      {/* Cabeçalho */}
      <header className="t13-header">
        <div className="t13-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t13-logo" />
          <span className="t13-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t13-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t13-content">
        <div className="t13-article-container">
          <h2>Como acompanhar o status das minhas solicitações de monitoria</h2>
          <p>
            Acompanhar o status das suas solicitações de monitoria é simples e rápido. Siga os passos abaixo:
          </p>
          <ul>
            <li>
              <b>Acesse a aba "Monitoria":</b> Entre no sistema e clique na aba "Monitoria" no menu principal.
            </li>
            <li>
              <b>Verifique as solicitações pendentes:</b> Na seção "Pendentes", você poderá ver todas as solicitações em espera.
            </li>
            <li>
              <b>Consulte os detalhes:</b> Clique na solicitação desejada para visualizar mais informações.
            </li>
            <li>
              <b>Cancele se necessário:</b> Se desejar, você pode cancelar a solicitação pendente diretamente nesta tela.
            </li>
          </ul>
          <p>
            Fique atento às notificações para saber quando sua solicitação for respondida!
          </p>

          {/* Linha horizontal */}
          <hr className="t13-feedback-line" />

          {/* Feedback */}
          <div className="t13-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t13-feedback-buttons">
              <button
                className={`t13-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t13-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t13-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t13-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T13;
