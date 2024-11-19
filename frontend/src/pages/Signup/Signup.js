import React, { useState } from 'react';
import '../../styles/signup.css';  // Estilo da página de cadastro

function Signup() {
  const [isCourseVisible, setIsCourseVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleAdvanceToCourse = () => {
    setIsCourseVisible(true);
  };

  const handleAdvanceToProfile = () => {
    setIsProfileVisible(true);
    setIsCourseVisible(false);
  };

  return (
    <div className="signup-container">
      {/* Cabeçalho */}
      <div className="header">
        <div className="header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="signup-logo" />
          <span className="sagres-text">SAGRES</span>
          <a href="/centraldeajuda" className="help-link link-style">Central de Ajuda</a>
        </div>
      </div>

      {/* Área de Cadastro */}
      <div className="signup-left">
        <h2>BEM-VINDO(A)!</h2>
        <p>Já possui uma conta? <a href="/login" className="link-style">Entrar</a></p>

        <form className="signup-form">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" placeholder="Maria da Silva" />

          <label htmlFor="email">E-mail Institucional</label>
          <input type="email" id="email" placeholder="mariadasilva@discente.ufg.br" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="*******" />

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input type="password" id="confirmPassword" placeholder="*******" />

          {/* "Lembre-se de mim" */}
          <div className="signup-options">
            <label className="remember-me">
              <input type="checkbox" /> <span className="remember-me-text">Lembre-se de mim</span>
            </label>
          </div>

          <button type="button" className="signup-button" onClick={handleAdvanceToCourse}>Cadastrar</button>
        </form>
      </div>

      {/* Tela de Curso e Período */}
      {isCourseVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>QUAL SEU CURSO E EM QUE PERÍODO VOCÊ ESTÁ?</h2>
            <p>Adicione seu curso e período, respectivamente.</p>
            
            <label htmlFor="course">Curso</label>
            <div className="Couse-container">
            <input type="course" id="course" placeholder="Engenharia de Software" />
            </div>
            <label htmlFor="period">Período</label>
            <div className="period-container">
            <input type="period" id="period" placeholder="8º Período" />
            </div>
            <button type="button" onClick={handleAdvanceToProfile}>Avançar</button>
          </div>
        </div>
      )}

{isProfileVisible && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>ADICIONE UMA FOTO DE PERFIL!</h2>
      <p>Adicione uma foto para que saibam quem é você.</p>
      
      {/* Imagem de perfil de exemplo */}
      <img src="/exemplo-foto-perfil.jpeg" alt="Foto de Perfil" className="profile-photo-preview" />

      {/* Linha horizontal separadora */}
      <hr className="divider" />

      {/* Botões alinhados horizontalmente */}
      <div className="button-group">
        <button type="button">Escolher foto</button>
        <button type="button">Tirar foto</button>
        <button type="button">Pular</button>
      </div>
    </div>
  </div>
)}

      {/* Imagem à Direita */}
      <div className="signup-right">
        <img src="/imagem.jpeg" alt="Illustration" className="signup-illustration" />
      </div>
    </div>
  );
}

export default Signup;
