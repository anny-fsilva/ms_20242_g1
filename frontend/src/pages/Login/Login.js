// Login.js
import React from 'react';
import '../../styles/login.css';

function Login() {
  return (
    <div className="login-container">
      {/* Cabeçalho */}
      <div className="header">
        <div className="header-wrapper">
          <img src="/logosagres.png" alt="Sagres Logo" className="login-logo" />
          <span className="sagres-text">SAGRES</span>
          <a href="#help" className="help-link link-style">Central de Ajuda</a>
        </div>
      </div>

      {/* Área de Login */}
      <div className="login-left">
        <h2>BEM-VINDO(A) DE VOLTA!</h2>
        <p>Não possui uma conta? <a href="#signup" className="link-style">Cadastre-se</a></p>

        <form className="login-form">
          <label htmlFor="email">E-mail Institucional</label>
          <input type="email" id="email" placeholder="mariadasilva@discente.ufg.br" />

          <label htmlFor="password">Senha</label>
          <div className="password-container">
            <input type="password" id="password" placeholder="*******" />
          </div>

          {/* "Lembre-se de mim" e "Esqueceu a senha?" na mesma linha */}
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> <span className="remember-me-text">Lembre-se de mim</span>
            </label>
            <a href="#forgot-password" className="forgot-password link-style">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>

      {/* Imagem à Direita */}
      <div className="login-right">
        <img src="/imagem.jpeg" alt="Illustration" className="login-illustration" />
      </div>
    </div>
  );
}

export default Login;