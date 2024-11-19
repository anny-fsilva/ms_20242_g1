import React, { useState } from "react";
import '../../styles/T15.css';

const T15 = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (response) => {
    setFeedback(response);
    alert(`Obrigado pelo feedback: ${response === "sim" ? "Sim" : "Não"}`);
  };

  return (
    <div className="t15-container">
      {/* Cabeçalho */}
      <header className="t15-header">
        <div className="t15-header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="t15-logo" />
          <span className="t15-sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="t15-help-link">Central de Ajuda</a>
        </div>
      </header>

      {/* Conteúdo */}
      <div className="t15-content">
        <div className="t15-article-container">
          <h2>Como atuar como aluno e monitor no mesmo perfil</h2>
          <p>
            No Sagres, você pode visualizar e gerenciar suas funções como <b>mentor</b> e <b>mentorado</b> diretamente no seu perfil pessoal. Veja como funciona:
          </p>
          <ul>
            <li>
              <b></b> Clique no ícone do seu perfil no canto superior direito e selecione a opção <b>"Ver Perfil"</b>.
            </li>
            <li>
              <b>Seção de Mentor:</b>
              <ul>
                <li>
                  Aqui, você verá uma lista de disciplinas nas quais atua como mentor.
                </li>
                <li>
                  Ao lado de cada disciplina, clique no ícone de documento para ver a lista de alunos inscritos na monitoria dessa disciplina.
                </li>
                <li>
                  Clique em um aluno para visualizar os detalhes, como dias da semana e horários agendados.
                </li>
                <li>
                Para adicionar uma nova monitoria como mentor, basta ir até o perfil, clicar em <b>editar</b>  e, na seção de monitoria, clicar em <b>Adicionar Mentoria</b>.
                </li>
              </ul>
            </li>
            <li>
              <b>Seção de Mentorado:</b>
              <ul>
                <li>
                  Esta seção exibe as disciplinas em que você está inscrito como aluno.
                </li>
                <li>
                  Clique em uma disciplina para visualizar os detalhes da monitoria, incluindo os dias da semana e horários.
                </li>
              </ul>
            </li>
          </ul>
          

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
};

export default T15;
