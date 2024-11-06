-- Criação da tabela Usuario
CREATE TABLE Usuario (
    usuario_id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email_institucional TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    skills TEXT,
    periodo INTEGER,
    curso TEXT,
    bio TEXT,
    data_nascimento DATE
);

-- Criação da tabela Monitoria
CREATE TABLE Monitoria (
    monitoria_id SERIAL PRIMARY KEY,
    materia TEXT NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    horario TIMESTAMP NOT NULL,
    tipo TEXT,
    duracao INTEGER,
    dias TEXT,
    turno TEXT,
    monitor_id INTEGER REFERENCES Usuario(usuario_id) ON DELETE SET NULL
);

-- Criação da tabela Agendamento
CREATE TABLE Agendamento (
    agendamento_id SERIAL PRIMARY KEY,
    monitoria_id INTEGER REFERENCES Monitoria(monitoria_id) ON DELETE CASCADE,
    aluno_id INTEGER REFERENCES Usuario(usuario_id) ON DELETE CASCADE,
    horario TIMESTAMP NOT NULL,
    dia TEXT,
    confirmacao BOOLEAN DEFAULT FALSE
);

-- Criação da tabela Avaliacao
CREATE TABLE Avaliacao (
    avaliacao_id SERIAL PRIMARY KEY,
    agendamento_id INTEGER REFERENCES Agendamento(agendamento_id) ON DELETE CASCADE,
    avaliador_id INTEGER REFERENCES Usuario(usuario_id) ON DELETE CASCADE,
    pontuacao INTEGER CHECK (pontuacao >= 1 AND pontuacao <= 5),
    comentario TEXT
);

-- Criação da tabela Chat
CREATE TABLE Chat (
    chat_id SERIAL PRIMARY KEY,
    agendamento_id INTEGER REFERENCES Agendamento(agendamento_id) ON DELETE CASCADE,
    mensagem TEXT NOT NULL,
    data_hora TIMESTAMP NOT NULL
);

-- Criação da tabela Transacao
CREATE TABLE Transacao (
    transacao_id SERIAL PRIMARY KEY,
    agendamento_id INTEGER REFERENCES Agendamento(agendamento_id) ON DELETE CASCADE,
    valor DECIMAL(10, 2) NOT NULL,
    status_pagamento TEXT NOT NULL
);

