import React, { useState, useEffect } from 'react';
import Cabecalho from './../../components/cabecalho/cabecalho';  // Caminho correto do componente
import '../../styles/Dashboard.css';

const Dashboard = ({ nome }) => {
  const [monitorias, setMonitorias] = useState([]);

  // Função para buscar as monitorias do servidor (exemplo de fetch, substitua conforme necessário)
  useEffect(() => {
    // Aqui você pode fazer uma requisição para buscar as monitorias
    // Exemplo com fetch:
    // fetch('/api/monitorias')
    //   .then(response => response.json())
    //   .then(data => setMonitorias(data));

    // Como o exemplo não tem dados reais, vou deixar uma simulação com monitorias vazias
    setMonitorias([]); // Substitua isso pelo fetch real
  }, []);

  const safeMonitorias = Array.isArray(monitorias) ? monitorias : [];

  // Funções para calcular as estatísticas
  const monitoriasRealizadas = safeMonitorias.length;

  const avaliacaoMedia = safeMonitorias.length
    ? (safeMonitorias.reduce((total, monitoria) => total + (monitoria.avaliacao || 0), 0) / safeMonitorias.length).toFixed(1)
    : 0;

  const ganhosDoMes = safeMonitorias.filter(monitoria => {
    const dataAtual = new Date();
    const dataMonitoria = new Date(monitoria.dataHorario);
    return dataMonitoria.getMonth() === dataAtual.getMonth(); // Filtra monitorias do mês atual
  }).reduce((total, monitoria) => total + (monitoria.ganho || 0), 0).toFixed(2);

  const taxaAprovacao = safeMonitorias.length
    ? (safeMonitorias.filter(monitoria => monitoria.status === 'Aprovado').length / safeMonitorias.length * 100).toFixed(1)
    : 0;

  // Função para exibir a avaliação como número seguido de uma estrela
  const renderEstrelas = (avaliacao) => {
    return (
      <div className="star-rating">
        <p>{avaliacao} <span className="star">★</span></p> {/* Exibe a avaliação como número seguido de uma estrela */}
      </div>
    );
  };

  return (
    <div className="dashboard">
      <Cabecalho nome={nome} /> {/* Cabeçalho reutilizável */}

      <div className="greeting">
        <p>Olá, {nome}!</p>
        <button className="nova-monitoria-btn">Nova monitoria</button>
      </div>

      <div className="stats">
        <div className="stat">
          <h3>Monitorias realizadas</h3>
          <p>{monitoriasRealizadas}</p>
        </div>
        <div className="stat">
          <h3>Avaliação média</h3>
          <p>{avaliacaoMedia}</p>
        </div>
        <div className="stat">
          <h3>Ganhos do mês</h3>
          <p>R${ganhosDoMes}</p>
        </div>
        <div className="stat">
          <h3>Taxa de aprovação</h3>
          <p>{taxaAprovacao}%</p>
        </div>
      </div>

      <div className="monitorias-container">
        {/* Retângulo das Próximas Monitorias */}
        <div className="monitorias retangulo">
          <h2>Próximas monitorias</h2>
          {safeMonitorias.length === 0 ? (
            <p>Nenhuma monitoria por enquanto</p>
          ) : (
            safeMonitorias.map((monitoria, index) => (
              monitoria.status === 'Próxima' && (
                <div key={index} className="monitoria-item">
                  <div className="monitoria-info">
                    <div className="monitoria-details">
                      <p><strong>{monitoria.disciplina}</strong></p>
                      <p>{monitoria.dataHorario} até {monitoria.horarioFim}</p>
                    </div>
                    <button className="ver-detalhes-btn">Ver detalhes</button>
                  </div>
                </div>
              )
            ))
          )}
        </div>

        {/* Retângulo das Monitorias em Andamento */}
        <div className="monitorias retangulo">
          <h2>Monitorias recentes</h2>
          {safeMonitorias.filter(monitoria => monitoria.status === 'Em andamento').length === 0 ? (
            <p>Nenhuma monitoria em andamento</p>
          ) : (
            safeMonitorias.filter(monitoria => monitoria.status === 'Em andamento').map((monitoria, index) => (
              <div key={index} className="monitoria-item">
                <div className="monitoria-info">
                  <div className="monitoria-details">
                    <p><strong>{monitoria.disciplina}</strong></p>
                    <p>{monitoria.dataHorario} até {monitoria.horarioFim}</p>
                  </div>
                  {renderEstrelas(monitoria.avaliacao)} {/* Exibe o número de avaliação seguido de uma estrela */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
