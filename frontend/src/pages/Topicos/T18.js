import React, { useState } from "react";
import '../../styles/T18.css';

const T18 = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (response) => {
    setFeedback(response);
    alert(`Obrigado pelo feedback: ${response === "sim" ? "Sim" : "Não"}`);
  };

  return (
    <div className="t18-container">
      {/* Cabeçalho */}
      <header className="t18-header">
        <div className="t18-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t18-logo" />
          <span className="t18-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t18-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t18-content">
        <div className="t18-article-container">
          <h2>Por que o Sagres foi criado?</h2>
          <p>
            O Sagres foi criado com o objetivo de facilitar a interação entre alunos e monitores, promovendo uma forma eficiente de apoio acadêmico. A plataforma nasceu da necessidade de um sistema simples e acessível que conectasse estudantes que buscam ajuda em disciplinas específicas com aqueles que têm experiência e conhecimento para compartilhar.
          </p>
          <p>
            A ideia central foi permitir que monitores pudessem oferecer suporte de maneira organizada, enquanto os alunos tivessem um meio fácil de encontrar o apoio necessário para seu aprendizado. O Sagres não só facilita a aprendizagem, mas também contribui para o desenvolvimento de habilidades de ensino, permitindo que os monitores aprimorem suas capacidades ao ensinar outros.
          </p>
          <p>
            Além disso, o Sagres visa aumentar o engajamento acadêmico, proporcionando uma rede de apoio entre os alunos e criando um ambiente colaborativo e de troca de conhecimento, onde todos podem crescer e se desenvolver.
          </p>
          <p>
            E para os monitores, o Sagres também oferece a possibilidade de ganhar uma renda extra, uma vez que ao oferecer monitorias, eles podem ser remunerados pelo serviço prestado, além de aprimorar suas habilidades de ensino e aumentar sua experiência profissional.
          </p>

          {/* Linha horizontal */}
          <hr className="t18-feedback-line" />

          {/* Feedback */}
          <div className="t18-feedback-section">
            <p>Este artigo foi útil?</p>
            <div className="t18-feedback-buttons">
              <button
                className={`t18-feedback-button ${feedback === "sim" ? "green" : ""}`}
                onClick={() => handleFeedback("sim")}
              >
                <span className="t18-feedback-icon">👍</span> Sim
              </button>
              <button
                className={`t18-feedback-button ${feedback === "nao" ? "red" : ""}`}
                onClick={() => handleFeedback("nao")}
              >
                <span className="t18-feedback-icon">👎</span> Não
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T18;
