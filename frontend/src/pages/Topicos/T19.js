import React, { useState } from "react";
import '../../styles/T19.css';

const T19 = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (response) => {
    setFeedback(response);
    alert(`Obrigado pelo feedback: ${response === "sim" ? "Sim" : "Não"}`);
  };

  return (
    <div className="t19-container">
      {/* Cabeçalho */}
      <header className="t19-header">
        <div className="t19-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t19-logo" />
          <span className="t19-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t19-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t19-content">
        <div className="t19-article-container">
          <h2>Como o Sagres funciona?</h2>
          <p>
            O Sagres funciona como uma plataforma de monitoria acadêmica, onde os alunos podem solicitar a ajuda de monitores especializados em determinadas disciplinas. O sistema foi criado para facilitar a conexão entre alunos que precisam de auxílio e monitores que têm expertise nas matérias.
          </p>
          <p>
            A primeira etapa para utilizar o Sagres é o aluno realizar um cadastro no sistema. Uma vez cadastrado, ele pode pesquisar por disciplinas e monitores disponíveis. O aluno pode então enviar uma solicitação de monitoria, escolhendo o monitor que mais se adequa às suas necessidades.
          </p>
          <p>
            Após enviar a solicitação, o monitor tem a opção de aceitar ou recusar a solicitação. Se o monitor aceitar, o aluno será notificado e poderá realizar o pagamento para acessar o chat de monitoria. Se o monitor recusar, o aluno poderá tentar solicitar outro monitor ou alterar sua solicitação.
          </p>
          <p>
            O sistema também permite que os monitores ofereçam suas monitorias, onde eles podem ser remunerados pelo tempo e conhecimento que compartilham com os alunos. A plataforma foi criada não só para apoiar o aprendizado, mas também para proporcionar uma fonte de renda extra para os monitores.
          </p>
          <p>
            Além disso, o Sagres oferece um histórico de monitorias realizadas, permitindo que tanto alunos quanto monitores acompanhem o andamento das solicitações e as interações anteriores.
          </p>

          {/* Linha horizontal */}
          <hr className="t19-feedback-line" />

          {/* Feedback */}
          <div className="t19-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t19-feedback-buttons">
              <button
                className={`t19-feedback-button ${feedback === "sim" ? "green" : ""}`}
                onClick={() => handleFeedback("sim")}
              >
                <span className="t19-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t19-feedback-button ${feedback === "nao" ? "red" : ""}`}
                onClick={() => handleFeedback("nao")}
              >
                <span className="t19-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T19;
