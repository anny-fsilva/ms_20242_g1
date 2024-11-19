import React, { useState } from "react";
import '../../styles/T17.css';

const T17 = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (response) => {
    setFeedback(response);
    alert(`Obrigado pelo feedback: ${response === "sim" ? "Sim" : "Não"}`);
  };

  return (
    <div className="t17-container">
      {/* Cabeçalho */}
      <header className="t17-header">
        <div className="t17-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t17-logo" />
          <span className="t17-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t17-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t17-content">
        <div className="t17-article-container">
          <h2>O que é o Sagres?</h2>
          <p>
            O Sagres é uma plataforma de monitoria acadêmica desenvolvida para conectar alunos e monitores. Através dessa plataforma, alunos podem buscar apoio em disciplinas específicas, enquanto monitores podem oferecer seus conhecimentos e auxiliar outros alunos.
          </p>
          <p>
            A plataforma foi criada com o objetivo de melhorar a experiência acadêmica, oferecendo suporte extra para aqueles que buscam um aprofundamento em conteúdos específicos. Com o Sagres, alunos têm a oportunidade de aprender com colegas mais experientes, e monitores têm a chance de compartilhar seus conhecimentos enquanto ajudam outros estudantes.
          </p>
          <p>
            Além de ser uma plataforma de aprendizado colaborativo, o Sagres também oferece funcionalidades de gerenciamento de monitorias, permitindo que monitores e alunos se conectem de maneira prática e eficiente.
          </p>

          {/* Linha horizontal */}
          <hr className="t17-feedback-line" />

          {/* Feedback */}
          <div className="t17-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t17-feedback-buttons">
              <button
                className={`t17-feedback-button ${feedback === "sim" ? "green" : ""}`}
                onClick={() => handleFeedback("sim")}
              >
                <span className="t17-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t17-feedback-button ${feedback === "nao" ? "red" : ""}`}
                onClick={() => handleFeedback("nao")}
              >
                <span className="t17-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T17;
