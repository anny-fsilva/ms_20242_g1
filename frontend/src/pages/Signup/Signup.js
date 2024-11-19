import React, { useState } from 'react';
import '../../styles/signup.css'; 
import axios from '../../services/api'; 
function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    course: "",
    period: "",
  });

  const [isCourseVisible, setIsCourseVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  // Atualiza os dados do formulário no estado
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdvanceToCourse = () => {
    setIsCourseVisible(true);
  };

  const handleAdvanceToProfile = () => {
    setIsProfileVisible(true);
    setIsCourseVisible(false);
  };

  // Função para salvar os dados no backend ao clicar em "Pular"
  const handleSkip = async () => {
    try {
      const response = await axios.post("/api/usuarios/cadastro", {
        nome: formData.name,
        email: formData.email,
        senha: formData.password,
        curso: formData.course,
        periodo: formData.period,
      });
      console.log("Dados salvos:", response.data);
    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar os dados:", error.response || error.message);
    alert(`Não foi possível salvar os dados: ${error.response?.data || error.message}`);
    }
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
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Maria da Silva"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">E-mail Institucional</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mariadasilva@discente.ufg.br"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            value={formData.password}
            onChange={handleInputChange}
          />

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="*******"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />

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
              <input
                type="text"
                id="course"
                name="course"
                placeholder="Engenharia de Software"
                value={formData.course}
                onChange={handleInputChange}
              />
            </div>

            <label htmlFor="period">Período</label>
            <div className="period-container">
              <input
                type="text"
                id="period"
                name="period"
                placeholder="8º Período"
                value={formData.period}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={handleAdvanceToProfile}>Avançar</button>
          </div>
        </div>
      )}

      {/* Tela de Perfil */}
      {isProfileVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>ADICIONE UMA FOTO DE PERFIL!</h2>
            <p>Adicione uma foto para que saibam quem é você.</p>

            <img src="/exemplo-foto-perfil.jpeg" alt="Foto de Perfil" className="profile-photo-preview" />
            <hr className="divider" />

            <div className="button-group">
              <button type="button">Escolher foto</button>
              <button type="button">Tirar foto</button>
              <button type="button" onClick={handleSkip}>Pular</button>
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
