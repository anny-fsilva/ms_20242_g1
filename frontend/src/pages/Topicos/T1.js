import React, { useState } from 'react';
import '../../styles/T1.css'; // Certifique-se de criar este arquivo para os estilos

function T1() {
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (response) => {
    setFeedback(response);
  };

  return (
    <div className="t1-container">
      {/* Cabeçalho */}
      <header className="t1-header">
        <div className="t1-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t1-login-logo" />
          <span className="t1-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t1-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t1-content">
        <div className="t1-article-container">
          <h2>Como criar minha conta no Sagres?</h2>
          <p>Acesse o Sagres.</p>
          <ul>
            <li>Abra o site do Sagres.</li>
            <li>Selecione "Cadastrar-se".</li>
            <li>Informe seu e-mail institucional e senha.</li>
            <li>Preencha suas informações pessoais.</li>
            <li>Finalize o cadastro.</li>
            <li>Acesse sua conta.</li>
          </ul>
         

          {/* Linha horizontal acima da seção de feedback */}
          <hr className="t1-feedback-line" />

          {/* Seção de feedback */}
          <div className="t1-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t1-feedback-buttons">
              <button
                className={`t1-feedback-button ${feedback === 'sim' ? 'green' : ''}`}
                onClick={() => handleFeedback('sim')}
              >
                <span className="t1-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t1-feedback-button ${feedback === 'nao' ? 'red' : ''}`}
                onClick={() => handleFeedback('nao')}
              >
                <span className="t1-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default T1;
