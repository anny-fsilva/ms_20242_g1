import React from 'react';
import '../../styles/signup.css';  // Estilo da página de cadastro

function Signup() {
  return (
    <div className="signup-container">
      {/* Cabeçalho */}
      <div className="header">
        <div className="header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="signup-logo" />
          <span className="sagres-text">SAGRES</span>
          <a href="#help" className="help-link link-style">Central de Ajuda</a>
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

          <button type="submit" className="signup-button">Cadastrar</button>
        </form>
      </div>

      {/* Imagem à Direita */}
      <div className="signup-right">
        <img src="/imagem.jpeg" alt="Illustration" className="signup-illustration" />
      </div>
    </div>
  );
}

export default Signup;