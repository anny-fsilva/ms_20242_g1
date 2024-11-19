import React, { useState } from 'react';
import '../../styles/T9.css'; // Certifique-se de que o caminho é correto

function T9() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t9-container">
      {/* Cabeçalho */}
      <header className="t9-header">
        <div className="t9-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t9-logo" />
          <span className="t9-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t9-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t9-content">
        <div className="t9-article-container">
          <h2>Como realizar o pagamento de uma monitoria?</h2>
          <p>
            Após sua solicitação de monitoria ser aceita, você precisará realizar o pagamento para acessar os serviços. 
            Siga os passos abaixo:
          </p>
          <ol>
            <li>
              <b>Acesse a aba "Monitorias":</b> Localize a monitoria aceita na lista de monitorias.
            </li>
            <li>
              <b>Inicie o pagamento:</b> Clique na seção <i>"A iniciar"</i>, e depois em <i>" iniciar"</i> para acessar a página de pagamento.
            </li>
            <li>
              <b>Escolha o método de pagamento:</b> Selecione entre PIX ou boleto bancário.
            </li>
            <li>
              <b>Complete o pagamento:</b> Confirme os dados necessários e confirme a transação.
            </li>
            <li>
              <b>Acesso liberado:</b> Após o pagamento ser processado, você terá acesso ao chat com o monitor para começar suas aulas.
            </li>
          </ol>
          <p>
            Se enfrentar qualquer problema, entre em contato com o suporte do SAGRES.
          </p>

          {/* Linha horizontal */}
          <hr className="t9-feedback-line" />

          {/* Feedback */}
          <div className="t9-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t9-feedback-buttons">
              <button
                className={`t9-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t9-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t9-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t9-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T9;
