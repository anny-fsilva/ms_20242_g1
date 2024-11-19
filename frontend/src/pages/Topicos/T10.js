import React, { useState } from 'react';
import '../../styles/T10.css'; // Certifique-se de que o caminho é correto

function T10() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t10-container">
      {/* Cabeçalho */}
      <header className="t10-header">
        <div className="t10-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t10-logo" />
          <span className="t10-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t10-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t10-content">
        <div className="t10-article-container">
          <h2>Por que o pagamento é necessário para liberar o chat?</h2>
          <p>
            O pagamento é uma etapa essencial no processo de monitoria. 
            Ele garante que o serviço seja remunerado de maneira justa e transparente. 
          </p>
          <p>Veja os motivos principais:</p>
          <ul>
            <li>
              <b>Remuneração do monitor:</b> O pagamento permite que o monitor seja devidamente recompensado pelo tempo e esforço dedicados à sua monitoria.
            </li>
            <li>
              <b>Compromisso:</b> Ao pagar, você demonstra compromisso com a monitoria, o que incentiva o monitor a oferecer um serviço de alta qualidade.
            </li>
            <li>
              <b>Infraestrutura da plataforma:</b> Parte do pagamento ajuda a manter a plataforma SAGRES funcionando, garantindo segurança e estabilidade no uso.
            </li>
          </ul>
          <p>
            Somente após a confirmação do pagamento, você terá acesso ao chat com o monitor, onde poderá planejar as aulas e esclarecer dúvidas.
          </p>

          {/* Linha horizontal */}
          <hr className="t10-feedback-line" />

          {/* Feedback */}
          <div className="t10-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t10-feedback-buttons">
              <button
                className={`t10-feedback-button ${
                  feedback === 'sim' ? 'green' : ''
                }`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t10-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t10-feedback-button ${
                  feedback === 'nao' ? 'red' : ''
                }`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t10-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T10;
