import React, { useState } from "react";
import '../../styles/T16.css';

const T16 = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (response) => {
    setFeedback(response);
    alert(`Obrigado pelo feedback: ${response === "sim" ? "Sim" : "Não"}`);
  };

  return (
    <div className="t16-container">
      {/* Cabeçalho */}
      <header className="t16-header">
        <div className="t16-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t16-logo" />
          <span className="t16-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t16-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t16-content">
        <div className="t16-article-container">
          <h2>Critérios para oferecer monitoria como monitor</h2>
          <p>
            Para oferecer monitoria como monitor no Sagres, o usuário precisa atender aos seguintes critérios:
          </p>
          <ul>
            <li>
              <b>Estar aprovado na disciplina:</b> O monitor deve ter sido aprovado na disciplina que deseja oferecer monitoria.
            </li>
            <li>
              <b>Ter conhecimento sobre a matéria:</b> É necessário ter um bom domínio do conteúdo da disciplina.
            </li>
            <li>
              <b>Preencher o perfil de monitor:</b> O usuário deve preencher a seção de perfil como monitor.
            </li>
            <li>
              <b>Estar disponível para horários de monitoria:</b> O monitor precisa definir sua disponibilidade de horários para atender os alunos.
            </li>
            <li>
              <b>Ser selecionado por um aluno:</b> Após preencher os critérios acima, o monitor será visível para os alunos, que poderão solicitar a monitoria.
            </li>
          </ul>
          <p>
            Quando todos esses critérios forem atendidos, o monitor poderá começar a oferecer monitorias para os alunos.
          </p>

          {/* Linha horizontal */}
          <hr className="t16-feedback-line" />

          {/* Feedback */}
          <div className="t16-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t16-feedback-buttons">
              <button
                className={`t16-feedback-button ${feedback === "sim" ? "green" : ""}`}
                onClick={() => handleFeedback("sim")}
              >
                <span className="t16-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t16-feedback-button ${feedback === "nao" ? "red" : ""}`}
                onClick={() => handleFeedback("nao")}
              >
                <span className="t16-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T16;
