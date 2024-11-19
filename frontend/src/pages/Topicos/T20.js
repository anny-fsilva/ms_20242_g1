import React, { useState } from "react";
import '../../styles/T20.css';

const T20 = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (response) => {
    setFeedback(response);
    alert(`Obrigado pelo feedback: ${response === "sim" ? "Sim" : "Não"}`);
  };

  return (
    <div className="t20-container">
      {/* Cabeçalho */}
      <header className="t20-header">
        <div className="t20-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t20-logo" />
          <span className="t20-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t20-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t20-content">
        <div className="t20-article-container">
          <h2>Principais recursos do Sagres</h2>
          <p>
            O Sagres é uma plataforma robusta, desenvolvida para facilitar o processo de monitoria acadêmica. Abaixo, destacamos os principais recursos que tornam o Sagres uma ferramenta completa para alunos e monitores.
          </p>

          <ul className="t20-features-list">
            <li><strong>Cadastro de Alunos e Monitores:</strong> Os alunos e monitores podem se cadastrar na plataforma e atualizar suas informações sempre que necessário.</li>
            <li><strong>Pesquisa e Filtro de Monitorias:</strong> O aluno pode pesquisar por disciplinas e monitores disponíveis, filtrando por matéria, horário e outras preferências.</li>
            <li><strong>Solicitação de Monitoria:</strong> Após encontrar um monitor, o aluno pode solicitar a monitoria de forma simples, escolhendo o monitor mais adequado às suas necessidades.</li>
            <li><strong>Pagamento e Acesso ao Chat:</strong> Para efetivar a monitoria, o aluno realiza o pagamento e tem acesso a um chat privado com o monitor.</li>
            <li><strong>Histórico de Monitorias:</strong> Tanto alunos quanto monitores podem consultar o histórico de monitorias realizadas e acompanhar o andamento das interações passadas.</li>
            <li><strong>Feedback e Avaliação:</strong> O sistema permite que os alunos avaliem a qualidade da monitoria, fornecendo um feedback valioso para o monitor.</li>
            <li><strong>Possibilidade de Geração de Renda para Monitores:</strong> Monitores podem ganhar uma remuneração por suas monitorias, ajudando tanto no aprendizado quanto na geração de renda.</li>
          </ul>

          <p>
            Esses são apenas alguns dos recursos oferecidos pelo Sagres, uma plataforma completa para aprimorar a experiência acadêmica, tanto para alunos quanto para monitores.
          </p>

          {/* Linha horizontal */}
          <hr className="t20-feedback-line" />

          {/* Feedback */}
          <div className="t20-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t20-feedback-buttons">
              <button
                className={`t20-feedback-button ${feedback === "sim" ? "green" : ""}`}
                onClick={() => handleFeedback("sim")}
              >
                <span className="t20-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t20-feedback-button ${feedback === "nao" ? "red" : ""}`}
                onClick={() => handleFeedback("nao")}
              >
                <span className="t20-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T20;
