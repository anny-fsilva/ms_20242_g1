import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'; // Importando o componente Login
import Cadastro from './pages/Signup/Signup'; // Importando o componente Cadastro
import CentralDeAjuda from './pages/CentralDeAjuda/CentralDeAjuda'; // Importando o componente CentralDeAjuda
import ExplorarTopicos from './pages/ExplorarTopicos/ExplorarTopicos'; // Importando o componente ExplorarTopicos
import T1 from './pages/Topicos/T1'; // Certifique-se do caminho correto para o T1.js
import T2 from './pages/Topicos/T2'; 
import T3 from './pages/Topicos/T3'; 
import T4 from './pages/Topicos/T4'; 
import T5 from './pages/Topicos/T5'; 
import T6 from './pages/Topicos/T6'; 
import T7 from './pages/Topicos/T7'; 
import T8 from './pages/Topicos/T8'; 
import T9 from './pages/Topicos/T9'; 
import T10 from './pages/Topicos/T10'; 
import T11 from './pages/Topicos/T11'; 
import T12 from './pages/Topicos/T12'; 
import T13 from './pages/Topicos/T13'; 
import T14 from './pages/Topicos/T14'; 
import T15 from './pages/Topicos/T15'; 
import T16 from './pages/Topicos/T16'; 
import T17 from './pages/Topicos/T17'; 
import T18 from './pages/Topicos/T18'; 
import T19 from './pages/Topicos/T19'; 
import T20 from './pages/Topicos/T20'; 
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Página de Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
          <Route path="/centraldeajuda" element={<CentralDeAjuda />} /> {/* Página de CentralDeAjuda */}
          <Route path="/explorartopicos" element={<ExplorarTopicos />} /> {/* Página de CentralDeAjuda */}
          <Route path="/topico/Como-criar-minha-conta-no-Sagres" element={<T1 />} />
          <Route path="/topico/Passo-a-passo-para-configurar-meu-perfil-inicial" element={<T2 />} />
          <Route path="/topico/Como-atualizar-meus-dados-pessoais" element={<T3 />} />
          <Route path="/topico/Como-alterar-minha-senha-de-acesso" element={<T4 />} />
          <Route path="/topico/Passo-a-passo-para-solicitar-uma-monitoria" element={<T5 />} />
          <Route path="/topico/O-que-acontece-após-solicitar-uma-monitoria" element={<T6 />} />
          <Route path="/topico/Como-o-monitor-aceita-ou-recusa-solicitações" element={<T7 />} />
          <Route path="/topico/O-que-acontece-se-a-solicitação-for-recusada" element={<T8 />} />
          <Route path="/topico/Como-realizar-o-pagamento-de-uma-monitoria" element={<T9 />} />
          <Route path="/topico/Por-que-o-pagamento-é-necessário-para-liberar-o-chat" element={<T10 />} />
          <Route path="/topico/Como-funciona-o-chat-após-o-pagamento" element={<T11 />} />
          <Route path="/topico/Dicas-para-usar-o-chat-de-forma-eficiente" element={<T12 />} />
          <Route path="/topico/Como-acompanhar-o-status-das-minhas-solicitações-de-monitoria" element={<T13 />} />
          <Route path="/topico/Onde-visualizar-o-histórico-de-aulas-e-monitorias" element={<T14 />} />
          <Route path="/topico/Como-atuar-como-aluno-e-monitor-no-mesmo-perfil" element={<T15 />} />
          <Route path="/topico/Critérios-para-oferecer-monitoria-como-monitor" element={<T16 />} />
          <Route path="/topico/O-que-é-o-Sagres" element={<T17 />} />
          <Route path="/topico/Por-que-o-Sagres-foi-criado" element={<T18 />} />
          <Route path="/topico/Como-o-Sagres-funciona" element={<T19 />} />
          <Route path="/topico/Principais-recursos-do-Sagres" element={<T20 />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
