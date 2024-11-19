### ms_20242_g1
Repositório definido para a manutenção do controle de versão dos artefatos do projeto de do Grupo 1, da Disciplina de Modelagem de Software, no semestre 2024-2.

### Nome do Projeto:
SAGRES

### Descrição:
A Escola de Sagres foi um centro de navegação e conhecimento no século XV, que impulsionou as grandes descobertas marítimas portuguesas. Inspirado por esse legado, o aplicativo Sagres conecta alunos para compartilhar conhecimento.

### Problema
A dificuldade de comparecer às monitorias organizadas pela universidade pode ser um empecilho para estudantes de baixo rendimento.

### Objetivos da Solução
Sistema que possibilita a conexão entre estudantes da UFG, através de cadastro com e-mail institucional, para a “contratação” de aulas particulares sobre determinadas matérias ou conteúdos específico;
Qualquer aluno pode ensinar;
As aulas podem ser dadas em qualquer hora e dia, pois o monitor quem monta seu horário;
A plataforma pode ser acessada de qualquer lugar.

### Grupo
Este projeto será desenvolvido pelos componentes do grupo 1:

|Matrícula|Nome|Usuário Git|
|---|---|---|
|202403059|ANA LUISA SILVA GONÇALVES|[AnaLuisa1016](https://github.com/AnaLuisa1016>)|
|202403072|GABRIEL RODRIGUES DA SILVA |[GGabrielRodrigues](https://github.com/GGabrielRodrigues)|
|202406173|JÚLIA DE SOUZA NASCIMENTO|[jusouzn](https://github.com/jusouzn)|
|202206158|LEANY SILVA FIGUEREDO|[anny.fsilva](https://github.com/anny.fsilva)|
|202403096|VERÔNICA RIBEIRO OLIVEIRA PALMEIRA|[Veronicapalmeira](https://github.com/Veronicapalmeira)|

### Backlog do Produto

1. RF001 - Cadastro dos alunos utilizando o email institucional, curso e o período que cursa, foto de perfil e a criação de nome de usuário, senha e escolha do tipo de usuário:monitor ou aluno.
2. RF002 - Cadastro dos cursos e das matérias que serão disponibilizadas para monitoria.
<<<<<<< HEAD
3. RF003 - Calendário interativo que permite ao aluno escolher o dia da monitoria com determinado monitor, e ao monitor, cadastrar os horários nos dias e das matérias que disponibilizará a monitoria.
4. RF004 - Chat entre monitor e aluno.
5. RF005 - Cadastramento de informações bancárias para pagamento com cartão de crédito ou pix das taxas das monitorias.
6. RF006 - Sistema de rankeamento, com base na avaliação dos alunos, para os monitores.
7. RF007 - Barra de pesquisa para encontrar monitores ou a matéria que se pretende agendar uma aula.
=======
3. RF003 - Barra de pesquisa para encontrar monitores ou a matéria que se pretende agendar uma aula.
4. RF004 - Agendamento interativo que permite ao aluno escolher o dia da monitoria com determinado monitor, e ao monitor, cadastrar os horários nos dias e das matérias que disponibilizará a monitoria. 
5. RF005 - Sistema de rankeamento, com base na avaliação dos alunos, para os monitores.
6. RF006 - Chat entre monitor e aluno. 
7. RF007 - Cadastramento de informações bancárias para pagamento com cartão de crédito ou pix das taxas das monitorias. 
>>>>>>> main
8. RF008 - Geração de relatórios mensais para os monitores: análise de procure pelos seu perfil, quantas aulas foram dadas, quanto recebeu por elas e a média de classificação.

### Protótipo

(https://www.figma.com/design/PF24xbyrpx6XLS3s2TUh7D/Untitled?node-id=0-1&node-type=canvas&t=JFsdLCugLKjz0sfo-0)

### Requisitos Não Funcionais

1. RNF001 - Usabilidade: deve haver facilidade no uso .
2. RNF002 - Usabilidade: mascara de validação nos campos de CPF, email. .
3. RNF003 - Segurança: Criptografia dos dados bancários e da senha antes de serem armazenadas no banco de dados.
4. RNF004 - Desempenho: Deve suportar o acesso de 1/5 dos usuários em períodos de alta demanda, como semanas de prova final.
5. RNF005 - Confiabilidade: Backups semanais para que monitores não percam dados como feedback de alunos, monitorias dadas, aulas agendadas.
6. RNF006 - Confiabilidade: Sistema deve estar disponível por 24 horas.
7. RNF007 - Manutenibilidade: A documentação deve estar completa e ser constantemente atualizada para facilitar na manutenção e atualizações posteriores do sistema.
8. RNF008 - Portabilidade: Aplicação web, devendo funcionar nos navegadores Google Chrome, Firefox, Safari e Microsoft Edge, nas versões mais recentes.
9. RNF009 - Conectividade: Dados devem sem sincronuzados em tempo real, de modo que as informações sobre horários e datas disponíveis para monitorias, inscrições, solicitações ao monitor sejam apresentadas aos usuários de modo atualizado e consistente.

### Regras de Negócio
1. RN01 - Apenas monitores podem cadastrar aulas no calendários e editá-las.
2. RN02 - As informações bancárias dos usuários não podem estar disponíveis para outros usuários.
3. RN03 - O pagamento só irá ocorrer após a realização da monitoria.
4. RN04 - Cadastro será concluído apenas quando usado o email institucional e todas as informações de login corretas..

### Modelo Arquitetural
O SAGRES utiliza uma arquitetura baseada em microserviços para permitir escalabilidade e modularidade. A aplicação é dividida em uma camada de front-end e uma de back-end. No front-end, React é utilizado para construir interfaces dinâmicas e interativas, enquanto o back-end é implementado com Java Spring, o que facilita a gestão de autenticação, agendamento e comunicação. A arquitetura adota uma estrutura cliente-servidor, onde o servidor fornece API RESTful para operações, permitindo que o front-end faça chamadas assíncronas e atualize o conteúdo dinamicamente.

### Modelo de Interfaces Gráficas
O modelo de interfaces gráficas do SAGRES prioriza a experiência do usuário, com design intuitivo para facilitar a navegação de alunos e monitores. As principais interfaces incluem o painel de login/cadastro, dashboard, página de busca e agendamento de monitorias, painel de pagamento, sistema de ranking e avaliações, além de um chat integrado para comunicação direta entre alunos e monitores. A interface é projetada em camadas, com foco em usabilidade, responsividade e acessibilidade para dispositivos móveis e desktops, promovendo uma experiência coesa em toda a plataforma.

### Tecnologia de Persistência de Dados
O SAGRES utiliza o banco de dados relacional PostgreSQL para persistência, com uma estrutura bem definida que armazena informações de usuários, monitorias, pagamentos, avaliações e histórico de aulas. As interações com o banco de dados são feitas diretamente a partir da camada de back-end em Java Spring, usando consultas SQL para garantir flexibilidade e controle sobre as operações de leitura e gravação. Isso permite gerenciar e organizar dados de maneira eficiente, garantindo segurança e consistência nas transações.

### Local do _Deploy_
Render

### Cronograma de Desenvolvimento

|Iteração|Descrição|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
<<<<<<< HEAD
|1|Concepção|27/08/2024|03/09/2024|Grupo|Concluída|
|2|Preparação|03/09/2024|17/09/2024|Grupo|Concluída|
|3|Item 1 do backlog|28/09/2024|11/10/2024|Grupo|Concluída|
|4|Item 2 do backlog|12/10/2024|25/10/2024|Grupo|Concluída|
|5|Item 3 do backlog|26/10/2024|08/11/2024|Grupo|Concluída|
|6|Item 4 do backlog|09/11/2024|22/11/2024|Grupo|Concluída|
|7|Item 5 do backlog|23/11/2024|06/12/2024|Grupo|Concluída|
|8|Apresentação do Projeto|19/11/2024|26/11/2024|Grupo|Concluída|
=======
|1|Concepção|27/08/2024|03/09/2024|Grupo 1|Concluída|
|1|Preparação|03/09/2024|10/09/2024|Grupo 1|Concluída|
|1|Item 1 do backlog|10/09/2024|17/09/2024|Grupo 1|Concluída|
|2|Item 2 do backlog|17/09/2024|01/10/2024|Grupo 1|Concluída|
|3|Itens 1 e 2 do backlog|01/10/2024|15/10/2024|Grupo 1|Concluída|
|4|Item 3 do backlog|15/10/2024|29/10/2024|Grupo 1|Concluída|
|5|Item 4 do backlog|29/10/2024|19/12/2024|Grupo 1|Concluída|
|6|Apresentação do Projeto|19/12/2024|26/12/2024|Grupo 1|Concluída|
>>>>>>> main

### Iterações x Atividades
|Iteração|Tarefa|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Definição do grupo de trabalho|01/09/2024|03/09/2024|Grupo 1|Concluída|
|1|Definição do Tema do Trabalho|01/09/2024|03/09/2024|Grupo 1|Concluída|
|2|Definição do Backlog do produto|03/09/2024|10/09/2024|Grupo 1|Concluída|
|2|Descrição dos itens do backlog do produto|03/09/2024|10/09/2024|Grupo 1|Concluída|
|1|Distribuição dos itens do backlog entre as iterações|03/09/2024|10/09/2024|Grupo 1|Concluída|
|1|Especificação de estórias de usuários dos Item(ns) do backlog|13/09/2024|24/19/2024|Grupo 1|Concluída|
|2|Diagrama de classes dos Item(ns) do backlog 1 ao 5 |24/09/2024|08/10/2024|Júlia Souza|Concluída|
|2|Projeto de Interfaces gráficas dos itens do backlog 1 ao 2 no Figma|24/09/2024|08/10/2024|Verônica Ribeiro|Concluída|
|3|Diagrama atividades dos itens do backlog 1 ao 5|08/10/2024|15/10/2024|Júlia Souza|Concluída|
|3|Projeto de Interfaces gráficas dos itens do backlog 3 ao 5 no Figma|08/10/2024|22/10/2024|Verônica Ribeiro|Concluída|
|4|Diagrama de casos de uso dos itens do backlog |22/10/2024|29/10/2024|Gabriel Rodrigues|Concluída|
|4|Diagrama de sequência dos itens do backlog |22/10/2024|29/10/2024|Gabriel Rodrigues|Concluída|
|4|Projeto de persistência dos itens do backlog 1 |22/10/2024|29/10/2024|Júlia Rodrigues e Leany Figueredo |Programada|
|5|Implementação do item do backlog 1|29/10/2024|05/11/2024|Grupo 1|Programada|
|5|Projeto de Interfaces gráficas dos itens do backlog 2 e 3|29/10/2024|12/11/2024|Ana Luísa Gonçalves e Verônica Ribeiro|Concluída|
|5|Projeto de persistência dos itens do backlog 2 e 3|29/10/2024|12/11/2024|Júlia Souza e Leany Figueredo|Programada|
|5|Implementação dos item do backlog 2 e 3|29/10/2024|12/11/2024|Grupo 1|Programada|
|5|Projeto de Interfaces gráficas do item do backlog 4 |12/11/2024|19/11/2024|Ana Luísa Gonçalves e Verônica Ribeiro|Concluída|
|5|Projeto de persistência dos itens do backlog 4|12/11/2024|19/11/2024|Júlia Souza e Leany Figueredo|Programada|
|5|Implementação dos item do backlog 4|12/11/2024|19/11/2024|Grupo 1|Programada|
|6|Apresentação do Projeto|19/11/2024|26/11/2024|Grupo 1|Programada|

* Implementação se aplicará, se os itens da iteração em andamento, forem eleitos para validação do projeto do trabalho.
